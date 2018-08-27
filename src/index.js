import {initMap} from "./map";/*syntaksicheskaya mistake добавить фигурные скобки*/

ymaps.ready(() => {
  initMap(ymaps, "map");
  console.log("inited");
});
