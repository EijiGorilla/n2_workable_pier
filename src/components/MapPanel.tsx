/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/alt-text */
import { useRef, useEffect, useState } from 'react';
import {
  compass,
  controlPanelExpand,
  legend_workable,
  map,
  overView,
  printExpand,
  view,
} from '../Scene';
import '../index.css';
import '../App.css';
import { disableZooming, setup, dateUpdate, zoomToLayer } from '../Query';
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

      // legend
      view.ui.add(legend_workable, 'bottom-left');

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

  useEffect(() => {
    if (overviewMapDiv.current) {
      overView.container = overviewMapDiv.current;
      view.ui.add(overviewMapDiv.current, 'top-right');

      overView.when(disableZooming);

      overView.when(() => {
        view.when(() => {
          setup();
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

  // Alignment & Progress Line and Graphics
  useEffect(() => {
    if (cpValueSelected && componentSelected) {
      // layer.definitionExpression = ''
    }
  }, [cpValueSelected, componentSelected]);

  // Filter pile cap
  useEffect(() => {
    if (cpValueSelected || componentSelected) {
      if (cpValueSelected === 'All') {
        pileCapLayer.definitionExpression = '1=1';
        pierNumberLayer.definitionExpression = '1=1';
        lotLayer.visible = false;
        structureLayer.visible = false;
        nloLayer.visible = false;
        zoomToLayer(pierNumberLayer);
        if (componentSelected === 'All') {
          pileCapLayer.renderer = pile_cap_renderer_all;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_all;
          lotLayer.visible = false;
          structureLayer.visible = false;
          nloLayer.visible = false;
        } else if (componentSelected === 'Land') {
          pileCapLayer.renderer = pile_cap_renderer_land;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_land;
          lotLayer.visible = true;
          structureLayer.visible = false;
          nloLayer.visible = false;
        } else if (componentSelected === 'Structure') {
          pileCapLayer.renderer = pile_cap_renderer_structure;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_struc;
          lotLayer.visible = false;
          structureLayer.visible = true;
          nloLayer.visible = false;
        } else if (componentSelected === 'ISF') {
          pileCapLayer.renderer = pile_cap_renderer_nlo;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_nlo;
          lotLayer.visible = false;
          structureLayer.visible = false;
          nloLayer.visible = true;
        } else if (componentSelected === 'Utility') {
          pileCapLayer.renderer = pile_cap_renderer_utility;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_utility;
          lotLayer.visible = false;
          structureLayer.visible = false;
          nloLayer.visible = false;
        }
      } else if (cpValueSelected !== 'All') {
        pileCapLayer.definitionExpression = "CP = '" + cpValueSelected + "'";
        pierNumberLayer.definitionExpression = "CP = '" + cpValueSelected + "'";
        zoomToLayer(pierNumberLayer);
        if (componentSelected === 'All') {
          pileCapLayer.renderer = pile_cap_renderer_all;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_all;
          lotLayer.visible = false;
          structureLayer.visible = false;
          nloLayer.visible = false;
        } else if (componentSelected === 'Land') {
          pileCapLayer.renderer = pile_cap_renderer_land;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_land;
          lotLayer.visible = true;
          structureLayer.visible = false;
          nloLayer.visible = false;
        } else if (componentSelected === 'Structure') {
          pileCapLayer.renderer = pile_cap_renderer_structure;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_struc;
          lotLayer.visible = false;
          structureLayer.visible = true;
          nloLayer.visible = false;
        } else if (componentSelected === 'ISF') {
          pileCapLayer.renderer = pile_cap_renderer_nlo;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_nlo;
          lotLayer.visible = false;
          structureLayer.visible = false;
          nloLayer.visible = true;
        } else if (componentSelected === 'Utility') {
          pileCapLayer.renderer = pile_cap_renderer_utility;
          pierNumberLayer.labelingInfo = pierNumberLayer_label_utility;
          lotLayer.visible = false;
          structureLayer.visible = false;
          nloLayer.visible = false;
        }
      }
    }
  }, [cpValueSelected, componentSelected]);

  // Legend for Alignment & Progress
  useEffect(() => {
    if (componentSelected !== 'All') {
      view.rotation = 360;
    }
  }, [cpValueSelected, componentSelected]);

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
      {/* Overview Map*/}
      <div
        className="overviewMapdDiv"
        ref={overviewMapDiv}
        style={{
          position: 'fixed',
          top: controlPanelExpanded === false ? '50px' : '200px',
        }}
      ></div>

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
