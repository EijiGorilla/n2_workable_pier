/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import { useRef, useEffect, useState } from 'react';
import {
  compass,
  compass_overview,
  controlPanelExpand,
  legend_workable,
  legend_workable_overview,
  map,
  overView,
  overViewExpand,
  printExpand,
  scaleBar_overview,
  view,
} from '../Scene';
import '../index.css';
import '../App.css';
// import { disableZooming, setup, dateUpdate, zoomToLayer } from '../Query';
import { dateUpdate, disableZooming, filterPileCapByCP, zoomToLayer } from '../Query';
import '@esri/calcite-components/dist/components/calcite-card';
import '@esri/calcite-components/dist/components/calcite-button';
import { CalciteCard } from '@esri/calcite-components-react';
import ComponentListDisplay, { useComponentListContext } from './ComponentContext';
import ContractPackageDisplay, { useContractPackageContext } from './ContractPackageContext';
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
  stripMapLayer_overview,
  lotLayer_overview,
  structureLayer_overview,
  nloLayer_overview,
  utilityPointLayer_overview,
} from '../layers';
import Extent from '@arcgis/core/geometry/Extent';

function MapPanel() {
  const mapDiv = useRef(null);
  const overviewMapDiv = useRef<any>(null);
  const compassDiv = useRef<HTMLDivElement | undefined | any>(null);
  const scaleBarDiv_overview = useRef<HTMLDivElement | undefined | any>(null);
  const compassDiv_overview = useRef<HTMLDivElement | undefined | any>(null);
  const { cpValueSelected } = useContractPackageContext();
  const { componentSelected } = useComponentListContext();
  const [controlPanelExpanded, setControlPanelExpanded] = useState<boolean>(true);

  // 0. Updated date
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);
  const [daysPass, setDaysPass] = useState<boolean>(false);

  // Strip map
  const [selectedStrip, setSelectedStrip] = useState<any | undefined | null>(null);

  useEffect(() => {
    dateUpdate(updatedDateCategoryNames).then((response: any) => {
      setAsOfDate(response[0][0]);
      setDaysPass(response[0][1] >= cutoff_days ? true : false);
    });
  }, []);

  // Legend
  useEffect(() => {
    if (overViewExpand?.expanded === true) {
      view.ui.add(legend_workable_overview, 'bottom-right');
      view.ui.remove(legend_workable);
    } else {
      view.ui.remove(legend_workable_overview);
      view.ui.add(legend_workable, 'bottom-right');
    }
  }, [overViewExpand.expanded]);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      view.when(() => {
        zoomToLayer(pileCapLayer);
      });

      // legend;
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

      // overview
      overViewExpand.content = document.querySelector(`[id="overviewpanel"]`) as HTMLDivElement;
      view.ui.add(overViewExpand, 'bottom-right');
    }
  }, []);

  useEffect(() => {
    if (overviewMapDiv.current) {
      overView.container = overviewMapDiv.current;
      // view.ui.add(overviewMapDiv.current, 'bottom-left');

      // scale bar
      scaleBar_overview.container = scaleBarDiv_overview.current;
      overView.ui.add(scaleBar_overview, 'bottom-right');

      // compass
      compass_overview.container = compassDiv_overview.current;
      overView.ui.add(compass_overview, 'top-left');

      overView.when(disableZooming);

      overView.when(() => {
        view.when(() => {
          // setup();
          zoomToLayer(pierNumberLayer);
        });
      });
    }
  }, []);

  // Control Panle Expand
  reactiveUtils.when(
    () => controlPanelExpand?.expanded === false,
    () => setControlPanelExpanded(false),
  );

  reactiveUtils.when(
    () => controlPanelExpand?.expanded === true,
    () => setControlPanelExpanded(true),
  );

  // Overview
  reactiveUtils.when(
    () => overViewExpand?.expanded === false,
    () => view.ui.remove(overviewMapDiv.current),
  );

  reactiveUtils.when(
    () => overViewExpand?.expanded === true,
    () => view.ui.add(overviewMapDiv.current, 'bottom-left'),
  );

  // Filter pile cap

  useEffect(() => {
    if (cpValueSelected || componentSelected) {
      filterPileCapByCP(cpValueSelected);

      zoomToLayer(pierNumberLayer);

      if (componentSelected === 'All') {
        pileCapLayer.renderer = pile_cap_renderer_all;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_all;
        lotLayer.visible = true;
        structureLayer.visible = true;
        nloLayer.visible = true;
        utilityPointLayer.visible = true;

        // overview
        lotLayer_overview.visible = true;
        structureLayer_overview.visible = true;
        nloLayer_overview.visible = true;
        utilityPointLayer_overview.visible = true;
      } else if (componentSelected === 'Land') {
        pileCapLayer.renderer = pile_cap_renderer_land;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_land;
        lotLayer.visible = true;
        structureLayer.visible = false;
        nloLayer.visible = false;
        utilityPointLayer.visible = false;

        // overview
        lotLayer_overview.visible = true;
        structureLayer_overview.visible = false;
        nloLayer_overview.visible = false;
        utilityPointLayer_overview.visible = false;
      } else if (componentSelected === 'Structure') {
        pileCapLayer.renderer = pile_cap_renderer_structure;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_struc;
        lotLayer.visible = false;
        structureLayer.visible = true;
        nloLayer.visible = false;
        utilityPointLayer.visible = false;

        // Overview
        lotLayer_overview.visible = false;
        structureLayer_overview.visible = true;
        nloLayer_overview.visible = false;
        utilityPointLayer_overview.visible = false;
      } else if (componentSelected === 'ISF') {
        pileCapLayer.renderer = pile_cap_renderer_nlo;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_nlo;
        lotLayer.visible = false;
        structureLayer.visible = false;
        nloLayer.visible = true;
        utilityPointLayer.visible = false;

        // Overview
        lotLayer_overview.visible = false;
        structureLayer_overview.visible = false;
        nloLayer_overview.visible = true;
        utilityPointLayer_overview.visible = false;
      } else if (componentSelected === 'Utility') {
        pileCapLayer.renderer = pile_cap_renderer_utility;
        pierNumberLayer.labelingInfo = pierNumberLayer_label_utility;
        lotLayer.visible = false;
        structureLayer.visible = false;
        nloLayer.visible = false;
        utilityPointLayer.visible = true;

        // Overview
        lotLayer_overview.visible = false;
        structureLayer_overview.visible = false;
        nloLayer_overview.visible = false;
        utilityPointLayer_overview.visible = true;
      }
    }
  }, [cpValueSelected, componentSelected]);

  // Legend for Alignment & Progress
  useEffect(() => {
    if (componentSelected !== 'All') {
      // view.rotation = 360;
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
                // view rotate
                view.rotation = 305;

                // overview new extent
                const page_number = result.graphic.attributes['PageNumber'];
                const angle = result.graphic.attributes['Angle'];
                stripMapLayer_overview.definitionExpression = 'PageNumber = ' + page_number;

                const xmax = result.graphic.geometry.extent.xmax;
                const ymax = result.graphic.geometry.extent.ymax;
                const xmin = result.graphic.geometry.extent.xmin;
                const ymin = result.graphic.geometry.extent.ymin;

                const new_extent = new Extent({
                  xmax: xmax,
                  ymax: ymax,
                  xmin: xmin,
                  ymin: ymin,
                  spatialReference: {
                    wkid: 102100,
                  },
                });
                overView.extent = new_extent;
                overView.rotation = 360 - angle;
                overView.zoom = 17;

                setSelectedStrip(result.graphic.attributes['OBJECTID']);
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
          highlight.remove();
        });
      });
  }, [selectedStrip]);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>

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

      <div id="overviewpanel">
        <div className="overviewMapdDiv" ref={overviewMapDiv}></div>
      </div>

      {/* Updated date */}
      <div
        style={{
          color: daysPass === true ? 'red' : 'gray',
          fontSize: '0.6rem',
          float: 'right',
          marginRight: '5px',
          marginTop: '5px',
          zIndex: '1',
          position: 'fixed',
          bottom: 0,
          right: 5,
        }}
      >
        {!asOfDate ? '' : 'As of ' + asOfDate}
      </div>
    </>
  );
}

export default MapPanel;
