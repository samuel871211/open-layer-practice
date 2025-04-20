import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls } from 'ol/control';
import MousePosition from 'ol/control/MousePosition.js';
import { defaults as defaultInteractions } from 'ol/interaction/defaults';
import Draw from 'ol/interaction/Draw.js';
import { fromLonLat } from "ol/proj";

// openLayer 核心概念架構圖
// https://mermaid.live/edit#pako:eNpdT0Fug0AM_ArymSAoLIE99JJcKjVSpVY9VFws1gm0YY2cRS1F_L0b0lZKfLJnxh7PBDUbAg0Hwb4JXraVDXztsA9Wq_vgtaXPa-QRR5LTNbZh64SPN-iDdSRYu5btDfMk_E4XAkLoSDpsjf9hOssqcA11VIH2rUH5qKCys9fh4Ph5tDVoJwOFIDwcGtB7PJ78NPQGHW1b9EG6f7RH-8bc_a2QaR3L7pJ4CR764Gfv35NkDcmGB-tAq3TZBz3BF-hcRWlWxCpNilwVKgthBJ3dRfk6S1RelkmZxGUxh_C9-MVRsVbzD3FqayY

// basic map
// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 2
//   })
// });

// with MousePosition control
// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: [0, 0],
//     zoom: 2
//   }),
//   controls: defaultControls().extend([new MousePosition()])
// });

// change view to taiwan using projections
// const map = new Map({
//   target: 'map',
//   layers: [
//     new TileLayer({
//       source: new OSM()
//     })
//   ],
//   view: new View({
//     center: fromLonLat([121, 25]),
//     zoom: 7
//   }),
//   controls: defaultControls().extend([new MousePosition()])
// });

// with circle interactions
const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat([121, 25]),
    zoom: 7
  }),
  controls: defaultControls().extend([new MousePosition()]),
  interactions: defaultInteractions().extend([new Draw({ type: 'Circle' })])
});

