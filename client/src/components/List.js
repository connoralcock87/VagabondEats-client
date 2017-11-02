import React from 'react';

const List = (props) => {
console.log(props);

  if (props.mapSelection) {
    var truckList = props.mapSelection.map((location, index) => {
      return <li>Truck: {location.name} <br></br> Hours: {location.startTime} - {location.endTime} <br></br> Address: {location.address}</li>
    })

    return (
      <ul>
        {truckList}
      </ul>
    )
  }
  return null
  }

export default List
