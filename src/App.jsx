import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import './App.css'

function App() {
  
  return (
    <div className="App">
      <YMaps>
        <Map
          width='50%' height='50%'
          defaultState={{center: [55.75, 37.57], zoom: 12, controls: ["zoomControl", "fullscreenControl"]}}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark defaultGeometry={[55.75, 37.57]} />
        </Map>
      </YMaps>
    </div>
  )
}

export default App
