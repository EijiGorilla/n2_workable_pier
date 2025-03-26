/* eslint-disable prettier/prettier */
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import { SimpleMarkerSymbol, SimpleLineSymbol, TextSymbol, Font } from '@arcgis/core/symbols';

import LabelClass from '@arcgis/core/layers/support/LabelClass';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';

/////// Universal Renderere
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

export const workable_fields = [
  'AllWorkable',
  'LandWorkable',
  'StrucWorkable',
  'NLOWorkable',
  'UtilWorkable',
];
export const color_workable = '#98E600';
export const color_nonworkable = '#FF0000';
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
/////////////////////////////////////////////////////////////////////

export const stationPointSymbol_nscrex = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    style: 'circle',
    color: pointColor,
    size: pointSize, // pixels
    outline: {
      // autocasts as new SimpleLineSymbol()
      color: centerlineProjectColor.nscr_hex,
      width: pointOutlineWidth, // points
    },
  }),
});

export const lineSymbol_nscrex = new SimpleRenderer({
  label: 'NSCR-Ex',
  symbol: new SimpleLineSymbol({
    color: centerlineProjectColor.nscrex_hex,
    width: lineWidth,
    style: 'solid',
  }),
});

/* CP cut-off line */
const cp_break_line_label = new LabelClass({
  symbol: new TextSymbol({
    color: 'white',
    haloColor: '#9ca3af',
    haloSize: 0.3,
    yoffset: 5,
    xoffset: -10,
    font: {
      size: 7,
      // weight: 'bold',
    },
  }),
  labelPlacement: 'above-before',
  labelExpressionInfo: {
    expression: '$feature.CP_Start',
  },
});
const cp_break_line_renderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#4ce600',
    width: '2px',
  }),
});
export const cp_break_lines = new FeatureLayer({
  portalItem: {
    id: '38c8a9beadcc456191f0f0768acde8f2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  title: 'CP Break Line',
  renderer: cp_break_line_renderer,
  labelingInfo: [cp_break_line_label],
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});
cp_break_lines.listMode = 'hide';

/* ROW Layer */
var prowRenderer = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: '#ff0000',
    width: '2px',
  }),
});

export const prowLayer = new FeatureLayer({
  url: 'https://gis.railway-sector.com/server/rest/services/N2_Alignment/FeatureServer/1',
  layerId: 1,
  title: 'PROW',
  popupEnabled: false,
  renderer: prowRenderer,
});
prowLayer.listMode = 'hide';

/* Pile Cap */
const defaultSymbolPierCap = new SimpleFillSymbol({
  color: [225, 225, 225],
  style: 'solid',
  outline: new SimpleLineSymbol({
    color: [110, 110, 110],
    width: 1,
  }),
});

export const pile_cap_renderer_all = new UniqueValueRenderer({
  field: workable_fields[0],
  // defaultSymbol: defaultSymbolPierCap,
  uniqueValueInfos: workable_piers_uniqueValueInfos,
});

export const pile_cap_renderer_land = new UniqueValueRenderer({
  field: workable_fields[1],
  // defaultSymbol: defaultSymbolPierCap,
  uniqueValueInfos: workable_piers_uniqueValueInfos,
});

export const pile_cap_renderer_structure = new UniqueValueRenderer({
  field: workable_fields[2],
  // defaultSymbol: defaultSymbolPierCap,
  uniqueValueInfos: workable_piers_uniqueValueInfos,
});

export const pile_cap_renderer_nlo = new UniqueValueRenderer({
  field: workable_fields[3],
  // defaultSymbol: defaultSymbolPierCap,
  uniqueValueInfos: workable_piers_uniqueValueInfos,
});

export const pile_cap_renderer_utility = new UniqueValueRenderer({
  field: workable_fields[4],
  // defaultSymbol: defaultSymbolPierCap,
  uniqueValueInfos: workable_piers_uniqueValueInfos,
});

export const pileCapLayer = new FeatureLayer({
  portalItem: {
    id: '6f4bf8c34d344277bb69f6590096203f',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },

  title: 'Pile Cap',
  minScale: 150000,
  maxScale: 0,
  renderer: pile_cap_renderer_all,
  popupEnabled: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Pier Number point*/
const defaultSymbolPierNumber = new SimpleMarkerSymbol({
  color: [225, 225, 225],
  outline: new SimpleLineSymbol({
    color: [110, 110, 110],
    width: 1,
  }),
});

const pier_number_label_default = new LabelClass({
  symbol: new TextSymbol({
    color: 'white',
    haloColor: '#9ca3af',
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
});

export const pier_number_label_workable_all = new LabelClass({
  symbol: new TextSymbol({
    color: color_workable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'AllWorkable = 1',
});

export const pier_number_label_nonworkable_all = new LabelClass({
  symbol: new TextSymbol({
    color: color_nonworkable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'AllWorkable = 0',
});

export const pier_number_label_workable_land = new LabelClass({
  symbol: new TextSymbol({
    color: color_workable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'LandWorkable = 1',
});

export const pier_number_label_nonworkable_land = new LabelClass({
  symbol: new TextSymbol({
    color: color_nonworkable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'LandWorkable = 0',
});

export const pier_number_label_workable_struc = new LabelClass({
  symbol: new TextSymbol({
    color: color_workable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'StrucWorkable = 1',
});

export const pier_number_label_nonworkable_struc = new LabelClass({
  symbol: new TextSymbol({
    color: color_nonworkable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'StrucWorkable = 0',
});

export const pier_number_label_workable_nlo = new LabelClass({
  symbol: new TextSymbol({
    color: color_workable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'NLOWorkable = 1',
});

export const pier_number_label_nonworkable_nlo = new LabelClass({
  symbol: new TextSymbol({
    color: color_nonworkable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'NLOWorkable = 0',
});

export const pier_number_label_workable_utility = new LabelClass({
  symbol: new TextSymbol({
    color: color_workable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'UtilWorkable = 1',
});

export const pier_number_label_nonworkable_utility = new LabelClass({
  symbol: new TextSymbol({
    color: color_nonworkable,
    haloColor: pier_number_halo_color,
    haloSize: 0.5,
    yoffset: 5,
    font: {
      size: 10,
      weight: 'bold',
    },
  }),
  labelPlacement: 'above-right',
  labelExpressionInfo: {
    expression: '$feature.PIER',
  },
  where: 'UtilWorkable = 0',
});

// Workable piers for labels
export const pierNumberLayer_label_all = [
  pier_number_label_nonworkable_all,
  pier_number_label_workable_all,
];

export const pierNumberLayer_label_land = [
  pier_number_label_nonworkable_land,
  pier_number_label_workable_land,
];

export const pierNumberLayer_label_struc = [
  pier_number_label_nonworkable_struc,
  pier_number_label_workable_struc,
];

export const pierNumberLayer_label_nlo = [
  pier_number_label_nonworkable_nlo,
  pier_number_label_workable_nlo,
];

export const pierNumberLayer_label_utility = [
  pier_number_label_nonworkable_utility,
  pier_number_label_workable_utility,
];

export const pier_number_point_renderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 1,
    color: [0, 0, 0, 0],
    outline: {
      color: [110, 110, 110],
      width: 0.2,
    },
  }),
});

export const pierNumberLayer = new FeatureLayer(
  {
    portalItem: {
      id: '876de8483da9485aac5df737cbef2143',
      portal: {
        url: 'https://gis.railway-sector.com/portal',
      },
    },
    layerId: 6,
    renderer: pier_number_point_renderer,
    labelingInfo: [pier_number_label_workable_all, pier_number_label_nonworkable_all],
    title: 'Pier Number', //'Pier with Access Date (as of October 2023)',
    minScale: 150000,
    maxScale: 0,
    popupEnabled: false,
    elevationInfo: {
      mode: 'on-the-ground',
    },
  },
  //{ utcOffset: 300 },
);
pierNumberLayer.listMode = 'hide';

//// Station point
export const n2_station_label: any = new TextSymbol({
  color: centerlineProjectColor.nscrex_hex,
  haloColor: 'black',
  haloSize: 0.1,
  font: new Font({
    size: labelStation_fontSize,
    //weight: "bold"
  }),
});

export const n2LabelStation = new LabelClass({
  symbol: n2_station_label,

  deconflictionStrategy: 'none', // show overlapping numbers
  labelPlacement: 'center-left',
  labelExpressionInfo: {
    expression: '$feature.Station',
  },
  minScale: minScale,
  maxScale: maxScale,
});

export const n2StationLayer = new FeatureLayer({
  portalItem: {
    id: 'ace32f63bafc40f6bcfeecbee5fa6c69',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'Station',
  popupEnabled: false,
  definitionExpression: "Station <> 'NCC'",
  renderer: stationPointSymbol_nscrex,
  labelingInfo: [n2LabelStation], //[n2LabelStation],
  opacity: opacity,
});
n2StationLayer.listMode = 'hide';

/* Obstructed land */
var lotIdLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.LotID' },
  symbol: {
    type: 'text',
    color: '#E1E1E1',
    // haloColor: '#E1E1E1',
    // haloSize: 0.4,
    font: {
      size: 9,
      // weight: 'bold',
    },
  },
  minScale: 3000,
  maxScale: 0,
});

const lot_layer_renderer = new UniqueValueRenderer({
  field: 'Obstruction',
  uniqueValueInfos: [
    {
      value: 'Yes',
      label: 'Non-Workable',
      symbol: new SimpleFillSymbol({
        color: color_nonworkable,
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
    {
      value: 'No',
      label: 'Workable',
      symbol: new SimpleFillSymbol({
        color: color_workable,
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
  ],
});

export const lotLayer = new FeatureLayer({
  portalItem: {
    id: '23500954a8d84a46886e76e6e0883a69',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 4,
  labelingInfo: [lotIdLabel],
  renderer: lot_layer_renderer,
  // popupTemplate: templateLot,
  title: 'Land Acquisition',
  minScale: 20000,
  maxScale: 0,
  //labelsVisible: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* Obstructed Structure */
var strucLabel = new LabelClass({
  labelExpressionInfo: { expression: '$feature.StrucID' },
  symbol: {
    type: 'text',
    color: '#E1E1E1',
    // haloColor: '#E1E1E1',
    // haloSize: 0.4,
    font: {
      size: 8,
      // weight: 'bold',
    },
  },
});

const struc_layer_renderer = new UniqueValueRenderer({
  field: 'Obstruction',
  uniqueValueInfos: [
    {
      value: 'Yes',
      label: 'Non-Workable',
      symbol: new SimpleFillSymbol({
        color: color_nonworkable,
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
    {
      value: 'No',
      label: 'Workable',
      symbol: new SimpleFillSymbol({
        color: color_workable,
        style: 'backward-diagonal',
        outline: {
          width: 1,
          color: 'black',
        },
      }),
    },
  ],
});

export const structureLayer = new FeatureLayer({
  portalItem: {
    id: '23500954a8d84a46886e76e6e0883a69',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 3,
  labelingInfo: [strucLabel],
  renderer: struc_layer_renderer,
  // popupTemplate: templateLot,
  title: 'Structure',
  minScale: 1500,
  maxScale: 0,
  //labelsVisible: false,
  elevationInfo: {
    mode: 'on-the-ground',
  },
});

/* NLO point */
const nlo_renderer = new UniqueValueRenderer({
  valueExpression: "When($feature.StatusRC == 1, 'Relocated', 'Others')",
  uniqueValueInfos: [
    {
      value: 'Relocated',
      label: 'Relocated',
      symbol: new SimpleMarkerSymbol({
        style: 'circle',
        color: color_workable,
        size: '7px',
        outline: {
          width: 0.3,
          color: 'black',
        },
      }),
    },
    {
      value: 'Others',
      label: 'Un-relocated',
      symbol: new SimpleMarkerSymbol({
        style: 'circle',
        color: color_nonworkable,
        size: '7px',
        outline: {
          width: 0.3,
          color: 'black',
        },
      }),
    },
  ],
});

export const nloLayer = new FeatureLayer({
  portalItem: {
    id: '23500954a8d84a46886e76e6e0883a69',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  renderer: nlo_renderer,

  title: 'NLO (Non-Land Owner)',
  elevationInfo: {
    mode: 'on-the-ground',
  },
  minScale: 3000,
  maxScale: 0,
  popupEnabled: false,
});

// ----------------- Overview Map ----------------//
export const lineSymbolOverview_nscrex = new SimpleRenderer({
  symbol: new SimpleLineSymbol({
    color: centerlineProjectColor.nscrex_hex,
    width: '2.5px',
    style: 'solid',
  }),
});

export const n2CenterlineOverView = new FeatureLayer({
  portalItem: {
    id: 'ace32f63bafc40f6bcfeecbee5fa6c69',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  renderer: lineSymbolOverview_nscrex,
  layerId: 2,
  popupEnabled: false,
});

// date table
export const dateTable = new FeatureLayer({
  portalItem: {
    id: 'b2a118b088a44fa0a7a84acbe0844cb2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
});
