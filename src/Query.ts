/* eslint-disable prettier/prettier */
import { SimpleFillSymbol } from '@arcgis/core/symbols';
import {
  dateTable,
  n2_station_label,
  n2LabelStation,
  n2StationLayer,
  stationPointSymbol_nscrex,
} from './layers';
import { overView, view } from './Scene';
import { home_rotation, labelStation_fontSize_default, primaryLabelColor } from './UniqueValues';
import Graphic from '@arcgis/core/Graphic';
import * as reactiveUtils from '@arcgis/core/core/reactiveUtils';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';

export function lastDateOfMonth(date: Date) {
  const old_date = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const year = old_date.getFullYear();
  const month = old_date.getMonth() + 1;
  const day = old_date.getDate();
  const final_date = `${year}-${month}-${day}`;

  return final_date;
}

// Updat date
export async function dateUpdate(category: any) {
  const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const query = dateTable.createQuery();
  const queryExpression = "project = 'N2'" + ' AND ' + "category = '" + category + "'";
  query.where = queryExpression; // "project = 'N2'" + ' AND ' + "category = 'Land Acquisition'";

  return dateTable.queryFeatures(query).then((response: any) => {
    const stats = response.features;
    const dates = stats.map((result: any) => {
      // get today and date recorded in the table
      const today = new Date();
      const date = new Date(result.attributes.date);

      // Calculate the number of days passed since the last update
      const time_passed = today.getTime() - date.getTime();
      const days_passed = Math.round(time_passed / (1000 * 3600 * 24));

      const year = date.getFullYear();
      const month = monthList[date.getMonth()];
      const day = date.getDate();
      const final = year < 1990 ? '' : `${month} ${day}, ${year}`;
      return [final, days_passed];
    });
    return dates;
  });
}

// Overview Map constraint
export function disableZooming(overView: any) {
  overView.popup.dockEnabled = true;

  // Removes the zoom action on the popup
  overView.popup.actions = [];

  // stops propagation of default behavior when an event fires
  function stopEvtPropagation(event: any) {
    event.stopPropagation();
  }

  // exlude the zoom widget from the default UI
  view.ui.components = [];
  overView.ui.components = [];

  // disable mouse wheel scroll zooming on the overView
  overView.on('mouse-wheel', stopEvtPropagation);

  // disable zooming via double-click on the overView
  overView.on('double-click', stopEvtPropagation);

  // disable zooming out via double-click + Control on the overView
  overView.on('double-click', ['Control'], stopEvtPropagation);

  // disables pinch-zoom and panning on the overView
  overView.on('drag', stopEvtPropagation);

  // disable the overView's zoom box to prevent the Shift + drag
  // and Shift + Control + drag zoom gestures.
  overView.on('drag', ['Shift'], stopEvtPropagation);
  overView.on('drag', ['Shift', 'Control'], stopEvtPropagation);

  // prevents zooming with the + and - keys
  overView.on('key-down', (event: any) => {
    const prohibitedKeys = [
      '+',
      '-',
      'Shift',
      '_',
      '=',
      'ArrowUp',
      'ArrowDown',
      'ArrowRight',
      'ArrowLeft',
    ];
    const keyPressed = event.key;
    if (prohibitedKeys.indexOf(keyPressed) !== -1) {
      event.stopPropagation();
    }
  });

  return overView;
}

const extentDebouncer = promiseUtils.debounce((extent3Dgraphic: any, extent: any) => {
  extent3Dgraphic.geometry = extent;
});

export function setup() {
  let initialGeometry: any = null;
  const extent3Dgraphic = new Graphic({
    geometry: initialGeometry, // default: null
    symbol: new SimpleFillSymbol({
      color: [0, 0, 0, 0],
      outline: {
        width: 2,
        color: '#ff1947', //[178,34,34]
      },
    }),
  });
  overView.graphics.add(extent3Dgraphic);

  reactiveUtils.watch(
    () => view.extent,
    (extent: any) => {
      // Sync the overview map location
      // whenever the 3d view is stationary
      extentDebouncer(extent3Dgraphic, extent);
    },
    {
      initial: true,
    },
  );
}

// Zoom to layer
export function zoomToLayer(layer: any) {
  return layer.queryExtent().then((response: any) => {
    view
      .goTo(response.extent, {
        //response.extent
        speedFactor: 2,
      })
      .catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error(error);
        }
      });
  });
}

// Return to home extent
const home_center: any = [120.9, 14.7832299];
export function homeExtentRenderer() {
  view.rotation = home_rotation;
  view.scale = 577790.5542885;
  view.center = home_center;
}
