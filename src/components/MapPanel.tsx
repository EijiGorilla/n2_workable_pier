/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import { useRef, useEffect, useState } from 'react';
import {
  compass,
  controlPanelExpand,
  legend_workable,
  map,
  // overView,
  printExpand,
  view,
} from '../Scene';
import '../index.css';
import '../App.css';
// import { disableZooming, setup, dateUpdate, zoomToLayer } from '../Query';
import { dateUpdate, zoomToLayer } from '../Query';
import '@esri/calcite-components/dist/components/calcite-card';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteCard, CalciteAction } from '@esri/calcite-components-react';
import ComponentListDisplay, { useComponentListContext } from './ComponentContext';
import ContractPackageDisplay, { useContractPackageContext } from './ContractPackageContext';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import { cutoff_days, updatedDateCategoryNames } from '../UniqueValues';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import {
  lotLayer,
  pierNumberLayer,
  pierNumberLayer_label_all,
  pierNumberLayer_label_nlo,
  pierNumberLayer_label_land,
  pierNumberLayer_label_struc,
  pierNumberLayer_label_utility,
  pile_cap_renderer_all,
  pile_cap_renderer_nlo,
  pile_cap_renderer_land,
  pile_cap_renderer_structure,
  pile_cap_renderer_utility,
  pileCapLayer,
  structureLayer,
  nloLayer,
  utilityPointLayer,
  stripMapLayer,
} from '../layers';

function MapPanel() {
  const mapDiv = useRef(null);
  const overviewMapDiv = useRef(null);
  const compassDiv = useRef<HTMLDivElement | undefined | any>(null);
  const { cpValueSelected } = useContractPackageContext();
  const { componentSelected } = useComponentListContext();
  const [controlPanelExpanded, setControlPanelExpanded] = useState<boolean>(true);

  // 0. Updated date
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);
  const [daysPass, setDaysPass] = useState<boolean>(false);

  // Image
  const [imageDisplay, setImageDisplay] = useState<any>(null);
  const [closeCustomPopup, setCloseCustomPopup] = useState<boolean>(false);
  const [imagePopup, setImagePopup] = useState<boolean>(false);

  // Strip map
  const [selectedStrip, setSelectedStrip] = useState<any | undefined | null>(null);

  useEffect(() => {
    dateUpdate(updatedDateCategoryNames).then((response: any) => {
      setAsOfDate(response[0][0]);
      setDaysPass(response[0][1] >= cutoff_days ? true : false);
    });
  }, []);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.when(() => {
        zoomToLayer(pileCapLayer);
      });

      // legend
      view.ui.add(legend_workable, 'bottom-right');

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');

      // Compass
      compass.container = compassDiv.current;
      view.ui.add(compass, 'top-left');

      // Printer widget
      view.ui.add(printExpand, 'top-left');

      // Control Panel
      controlPanelExpand.content = document.querySelector(`[id="controlpanel"]`) as HTMLDivElement;
      view.ui.add(controlPanelExpand, 'top-right');
    }
  }, []);

  // useEffect(() => {
  //   if (overviewMapDiv.current) {
  //     overView.container = overviewMapDiv.current;
  //     view.ui.add(overviewMapDiv.current, 'top-right');

  //     overView.when(disableZooming);

  //     overView.when(() => {
  //       view.when(() => {
  //         setup();
  //         zoomToLayer(pierNumberLayer);
  //       });
  //     });
  //   }
  // }, []);

  // Control Panle Expand
  reactiveUtils.when(
    () => controlPanelExpand?.expanded === false,
    () => setControlPanelExpanded(false),
  );

  reactiveUtils.when(
    () => controlPanelExpand?.expanded === true,
    () => setControlPanelExpanded(true),
  );

  // Alignment & Progress Line and Graphics
  useEffect(() => {
    if (cpValueSelected && componentSelected) {
      // layer.definitionExpression = ''
    }
  }, [cpValueSelected, componentSelected]);

  // Filter pile cap
  useEffect(() => {
    const query_cp = "CP = '" + cpValueSelected + "'";
    if (cpValueSelected || componentSelected) {
      pileCapLayer.definitionExpression = query_cp;
      pierNumberLayer.definitionExpression = query_cp;
      lotLayer.definitionExpression = query_cp;
      structureLayer.definitionExpression = query_cp;
      nloLayer.definitionExpression = query_cp;
      utilityPointLayer.definitionExpression = query_cp;
      stripMapLayer.definitionExpression = query_cp;
      zoomToLayer(pierNumberLayer);

      if (componentSelected === 'All') {
        pileCapLayer.renderer = pile_cap_renderer_all;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_all;
        lotLayer.visible = true;
        structureLayer.visible = true;
        nloLayer.visible = true;
        utilityPointLayer.visible = true;
      } else if (componentSelected === 'Land') {
        pileCapLayer.renderer = pile_cap_renderer_land;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_land;
        lotLayer.visible = true;
        structureLayer.visible = false;
        nloLayer.visible = false;
        utilityPointLayer.visible = false;
      } else if (componentSelected === 'Structure') {
        pileCapLayer.renderer = pile_cap_renderer_structure;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_struc;
        lotLayer.visible = false;
        structureLayer.visible = true;
        nloLayer.visible = false;
        utilityPointLayer.visible = false;
      } else if (componentSelected === 'ISF') {
        pileCapLayer.renderer = pile_cap_renderer_nlo;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_nlo;
        lotLayer.visible = false;
        structureLayer.visible = false;
        nloLayer.visible = true;
        utilityPointLayer.visible = false;
      } else if (componentSelected === 'Utility') {
        pileCapLayer.renderer = pile_cap_renderer_utility;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_utility;
        lotLayer.visible = false;
        structureLayer.visible = false;
        nloLayer.visible = false;
        utilityPointLayer.visible = true;
      }
    }
  }, [cpValueSelected, componentSelected]);

  // Legend for Alignment & Progress
  useEffect(() => {
    if (componentSelected !== 'All') {
      view.rotation = 360;
    }
  }, [cpValueSelected, componentSelected]);

  // Feature Selection

  useEffect(() => {
    stripMapLayer.when(() => {
      view.on('click', (event: any) => {
        view.hitTest(event).then((response: any) => {
          const result = response.results[0];
          // const title = result?.graphic.layer.title;
          if (result) {
            if (result.graphic.layer) {
              const layer_name = result.graphic.layer.title;
              if (layer_name === 'Strip Map') {
                view.rotation = 305;
                const url = result.graphic.attributes['PhotoURL'];
                setSelectedStrip(result.graphic.attributes['OBJECTID']);
                setImagePopup(true);
                setCloseCustomPopup(false);
                setImageDisplay(url === null ? null : url);

                // Highlight selected strip
                // view.whenLayerView(stripMapLayer).then((layerView: any) => {
                //   highlight = layerView.highlight(result.graphic.attributes['OBJECTID']);
                //   layerView.filter = new FeatureFilter({
                //     where: undefined,
                //   });
                //   highlight.remove();
                // });
              }
            }
          }
        });
      });
    });
  }, []);

  // Higlight selected strip
  useEffect(() => {
    let highlight: any;
    selectedStrip &&
      view.whenLayerView(stripMapLayer).then((layerView: any) => {
        highlight = layerView.highlight(selectedStrip);
        view.on('click', () => {
          layerView.filter = new FeatureFilter({
            where: undefined,
          });
          highlight.remove();
        });
      });
  }, [selectedStrip]);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>

      {/* Image*/}
      <div
        style={{
          display:
            imagePopup === true && closeCustomPopup === false
              ? 'block'
              : imagePopup === false && closeCustomPopup === true
                ? 'none'
                : 'none',
        }}
      >
        <CalciteAction
          data-action-id="custom-popup"
          icon="x"
          text="close"
          id="close-popup"
          //textEnabled={true}
          onClick={(event: any) => {
            // setNextWidget(event.target.id);
            setCloseCustomPopup(closeCustomPopup === false ? true : false);
            setImagePopup(imagePopup === true ? false : true);
          }}
          style={{
            position: 'fixed',
            zIndex: '2',
            bottom: 5,
            right: 20,
          }}
        ></CalciteAction>
        <img
          style={{
            display:
              imagePopup === true && closeCustomPopup === false
                ? 'block'
                : imagePopup === false && closeCustomPopup === true
                  ? 'none'
                  : 'none',
            height: '40%',
            width: '45%',
            position: 'fixed',
            zIndex: '1',
            bottom: 5,
            left: 15,
            // borderStyle: 'solid',
            // borderInlineWidth: '0.5px',
          }}
          // src="https://EijiGorilla.github.io/Symbols/Gallery/Train_Operation_20240711.jpg"
          src={imageDisplay ? imageDisplay : null}
        />
      </div>

      {/* Control Panel*/}
      <div
        id="controlpanel"
        style={{ borderStyle: 'solid', borderColor: '#bfbfbf', borderWidth: '0.5px' }}
      >
        <CalciteCard style={{ fontSize: '0.5rem' }}>
          <ContractPackageDisplay />
          <ComponentListDisplay />
        </CalciteCard>
      </div>
      {/* Overview Map*/}
      {/* <div
        className="overviewMapdDiv"
        ref={overviewMapDiv}
        style={{
          position: 'fixed',
          top: controlPanelExpanded === false ? '50px' : '200px',
        }}
      ></div> */}

      {/* Updated date */}
      <div
        style={{
          color: daysPass === true ? 'red' : 'gray',
          fontSize: '0.8rem',
          float: 'right',
          marginRight: '5px',
          marginTop: '5px',
          zIndex: '1',
          position: 'fixed',
          bottom: 5,
          left: '25%',
        }}
      >
        {!asOfDate ? '' : 'As of ' + asOfDate}
      </div>
    </>
  );
}

export default MapPanel;
