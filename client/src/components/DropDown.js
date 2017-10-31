import React from 'react';

const DropDown = () => {
  return (
//truck_location.day
  <div className="btn-group dropup">
    <button type="button" className="btn btn-secondary">Select a day of the week</button>
    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span className="sr-only">Toggle Dropdown</span>
    </button>
    <div className="dropdown-menu">
    <h1>Monday</h1>
    </div>
  </div>
  )
}

export default DropDown;
