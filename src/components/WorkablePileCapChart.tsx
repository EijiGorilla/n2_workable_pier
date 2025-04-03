import { useEffect, useRef, useState } from 'react';
import { lotLayer } from '../layers';
import { view } from '../Scene';
import FeatureFilter from '@arcgis/core/layers/support/FeatureFilter';
import Query from '@arcgis/core/rest/support/Query';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';
import { calculateWorkablePiers, thousands_separators } from '../Query';
import '../App.css';
import '@esri/calcite-components/dist/components/calcite-segmented-control';
import '@esri/calcite-components/dist/components/calcite-segmented-control-item';
import '@esri/calcite-components/dist/components/calcite-label';
import '@esri/calcite-components/dist/components/calcite-checkbox';
import {
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
  CalciteCheckbox,
} from '@esri/calcite-components-react';
import { cutoff_days, updatedDateCategoryNames } from '../UniqueValues';

import { useContractPackageContext } from './ContractPackageContext';
import { useComponentListContext } from './ComponentContext';

// Dispose function
function maybeDisposeRoot(divId: any) {
  am5.array.each(am5.registry.rootElements, function (root) {
    if (root.dom.id === divId) {
      root.dispose();
    }
  });
}

///*** Others */
/// Draw chart
const WorkablePileCapChart = () => {
  const { cpValueSelected } = useContractPackageContext();
  const { componentSelected } = useComponentListContext();

  // 1. Land Acquisition
  const pieSeriesRef = useRef<unknown | any | undefined>({});
  const legendRef = useRef<unknown | any | undefined>({});
  const chartRef = useRef<unknown | any | undefined>({});
  const [workableData, setWorkableData] = useState<unknown | any | undefined>([]);

  const chartID = 'pie-two';

  useEffect(() => {
    calculateWorkablePiers(cpValueSelected, componentSelected).then((result: any) => {
      setWorkableData(result);
      console.log(result);
    });
  }, [cpValueSelected, componentSelected]);

  useEffect(() => {
    // Dispose previously created root element
    maybeDisposeRoot(chartID);

    var root = am5.Root.new(chartID);
    root.container.children.clear();
    root._logo?.dispose();

    // Set themesf
    root.setThemes([am5themes_Animated.new(root), am5themes_Responsive.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        // centerY: am5.percent(25), //-10
        // y: am5.percent(-25), // space between pie chart and total lots
        layout: root.verticalLayout,
      }),
    );
    chartRef.current = chart;
    // /// //
    // Create series
    var pieSeries = chart.series.push(
      am5percent.PieSeries.new(root, {
        name: 'Series',
        categoryField: 'category',
        valueField: 'value',
        radius: am5.percent(45), // outer radius
        innerRadius: am5.percent(28),
        scale: 1.7,
      }),
    );
    pieSeriesRef.current = pieSeries;
    chart.series.push(pieSeries);

    // values inside a donut
    pieSeries.children.push(
      am5.Label.new(root, {
        text: '[#000000]{valueSum}[/]\n[fontSize: 0.45em; #000000; verticalAlign: super]TOTAL PILE CAP[/]',
        fontSize: '1.3em',
        centerX: am5.percent(50),
        centerY: am5.percent(40),
        populateText: true,
        oversizedBehavior: 'fit',
        textAlign: 'center',
      }),
    );

    // pieSeries.onPrivate('width', (width: any) => {
    //   inner_label.set('maxWidth', width * 0.7);
    // });

    // Set slice opacity and stroke color
    pieSeries.slices.template.setAll({
      toggleKey: 'none',
      fillOpacity: 0.9,
      stroke: am5.color('#ffffff'),
      strokeWidth: 0.5,
      strokeOpacity: 1,
      templateField: 'sliceSettings',
      tooltipText: '{category}: {valuePercentTotal.formatNumber("#.")}%',
    });

    // Disabling labels and ticksll
    // pieSeries.labels.template.set('visible', true);
    // pieSeries.ticks.template.set('visible', true);
    pieSeries.data.setAll(workableData);

    // Disabling labels and ticksll
    // pieSeries.labels.template.setAll({
    //   // fill: am5.color('#ffffff'),
    //   // fontSize: '0.5rem',
    //   visible: false,
    //   scale: 0,
    //   // oversizedBehavior: 'wrap',
    //   // maxWidth: 65,
    //   // text: "{category}: [#C9CC3F; fontSize: 10px;]{valuePercentTotal.formatNumber('#.')}%[/]",
    // });

    // pieSeries.labels.template.set('visible', true);
    // pieSeries.ticks.template.setAll({
    //   // fillOpacity: 0.9,
    //   // stroke: am5.color('#ffffff'),
    //   // strokeWidth: 0.3,
    //   // strokeOpacity: 1,
    //   visible: false,
    //   scale: 0,
    // });

    pieSeries.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [chartID, workableData]);

  useEffect(() => {
    pieSeriesRef.current?.data.setAll(workableData);
    // legendRef.current?.data.setAll(pieSeriesRef.current.dataItems);
  });

  return (
    <>
      <div
        id={chartID}
        style={{
          height: '200px',
          width: '200px',
          position: 'fixed',
          zIndex: '10',
          top: 100,
          left: 0,
          // backgroundColor: 'gray',
        }}
      ></div>
    </>
  );
}; // End of lotChartgs

export default WorkablePileCapChart;
