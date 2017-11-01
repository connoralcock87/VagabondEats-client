import React from 'react'
// import ReactDOM from 'react-dom'
import {Map, TileLayer, Marker, Popup} from 'react-leaflet'

const position = [39.742043, -104.991531]

// export class MapView extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  // render() {

    const cordsTest = [39.758265, -105.007315]
    const cordsTest2 = [39.761981, -104.981562]
    const cordsTest3 = [39.769584, -104.905980]

    // const key1 = 1
const MapView = (props) => {

  var markers = props.mapSelection.map((location, index) => {

    return (
      <Marker key={index} position={location.coordinates.split(",")}>
        <Popup>
          <p>Truck: {location.name}<br/>Hours: {location.startTime} - {location.endTime}<br/></p>
        </Popup>
      </Marker>
    )
  })

    return (
      <div>
        <Map
          style={{height: "70vh", width: "100vw"}}
          center={position}
          zoom={13}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/spacebear09/cj98oo7d51pp52so2i77m9ybi/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3BhY2ViZWFyMDkiLCJhIjoiY2o5NWczaTd6NGg1dDMzbzRmMnRtd2wyOCJ9.ajGxzHLCM4ABWnct4Fy3NQ"
            attribution="<attribution>" />
            {markers}
         </Map>
      </div>
    )


  }
// }
// <Popup>
//   <span>Burger Chief<br/>1pm-9pm<br/>1695 Platte Street<br/></span>
// </Popup>
// </Marker>
// <Marker key={key1} position={cordsTest2}>
// <Popup>
//  <span>Chicken Rebel<br/>2927 Larimer St<br/>5pm-10pm<br/></span>
// </Popup>
// </Marker>
// <Marker key={key1} position={cordsTest3}>
// <Popup>
//  <span>Rocky Mountain Slices<br/>7045 E 38th Ave<br/> <br/>2pm-9pm<br/></span>
// </Popup>

export default MapView
