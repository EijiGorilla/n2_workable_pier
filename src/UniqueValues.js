import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol, Font } from '@arcgis/core/symbols';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

//
export const pointSymbol = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    style: 'circle',
    color: [0, 0, 0, 0.2],
    size: '3px',
    outline: {
      color: [0, 0, 0, 0],
      width: 0.5,
    },
  }),
});

// Pile Cap Layer
export const workable_fields = [
  'AllWorkable',
  'LandWorkable',
  'StrucWorkable',
  'NLOWorkable',
  'UtilWorkable',
];
export const color_workable = '#98E600';
export const color_nonworkable = '#FF0000';
export const color_workable_obstruction = [152, 230, 0, 0.5];
export const color_nonworkable_obstruction = [255, 0, 0, 0.4];
export const workable_piers_uniqueValueInfos = [
  {
    value: 0,
    label: 'Non-Workable',
    symbol: new SimpleFillSymbol({
      color: color_nonworkable,
      outline: {
        width: 1,
        color: 'black',
      },
    }),
  },
  {
    value: 1,
    label: 'Workable',
    symbol: new SimpleFillSymbol({
      color: color_workable,
      outline: {
        width: 1,
        color: 'black',
      },
    }),
  },
];

// Strip Map Layer
export const strip_map_uniqueValueInfos = [
  {
    value: 'No',
    label: 'Workable',
    symbol: new SimpleFillSymbol({
      color: color_workable_obstruction,
      outline: {
        width: 0.8,
        color: 'grey',
      },
    }),
  },
  {
    value: 'Yes',
    label: 'Non-Workable',
    symbol: new SimpleFillSymbol({
      color: color_nonworkable_obstruction,
      outline: {
        width: 0.8,
        color: 'black',
      },
    }),
  },
];

/////

export const minScale = 577790;
export const minScale_stNumber = minScale + 1000;
export const maxScale = 0;
export const maxScale_stNumber = 288896; //288896
export const opacity = 1;

export const lineWidth = '6px';
export const centerlineProjectColor = {
  nscr_hex: '#ff5f22',
  mmsp_hex: '#00b7ff', //"#0000ff"
  nscrex_hex: '#ff5f22', //"#00b3ff","#00B0F0", "#15C2FF"
};

const pointColor = 'white';
export const pointSize = '12px'; // original: 10px
export const pointOutlineWidth = 2.5; // original: 1.5
export const labelStation_fontSize = 11;
export const labelStation_fontSize_default = 11.5;

const pier_number_halo_color = '#4E4E4E';

/* eslint-disable prettier/prettier */
// Updated Dates
export const updatedDateCategoryNames = 'Progress Summary Gauge';
export const cutoff_days = 30;

// Date Picker
export const monthList = [
  {
    value: 1,
    month: 'Jan.',
  },
  {
    value: 2,
    month: 'Feb.',
  },
  {
    value: 3,
    month: 'Mar.',
  },
  {
    value: 4,
    month: 'Apr.',
  },
  {
    value: 5,
    month: 'May',
  },
  {
    value: 6,
    month: 'Jun.',
  },
  {
    value: 7,
    month: 'Jul.',
  },
  {
    value: 8,
    month: 'Aug.',
  },
  {
    value: 9,
    month: 'Sep.',
  },
  {
    value: 10,
    month: 'Oct.',
  },
  {
    value: 11,
    month: 'Nov.',
  },
  {
    value: 12,
    month: 'Dec.',
  },
];

// utility point
export const util_marker_size = '20px';

// Main Map:------------------------------------
export const home_rotation = 360; // 330
export const home_center = [120.9, 14.7832299];
export const home_scale = 292400;

export const primaryLabelColor = '#9ca3af';

// Overview Map: ----------------------------------
export const overViewCenter = [120.6736473, 15.0422548];
export const zoom_overview = 7;
