import React from 'react';
import { ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap';

const DropDown = (props) => {
  return (
    <div class="DropDown">
      <ButtonToolbar>
        <DropdownButton bsSize="large" title="Please select day of the week" id="dropdown-size-large" onSelect={ props.updateMap }>
          <MenuItem eventKey="1" id="Monday">Monday</MenuItem>
          <MenuItem eventKey="2" id="Tuesday">Tuesday</MenuItem>
          <MenuItem eventKey="3" id="Wednesday">Wednesday</MenuItem>
          <MenuItem eventKey="4" id="Thursday">Thursday</MenuItem>
          <MenuItem eventKey="5" id="Friday">Friday</MenuItem>
          <MenuItem eventKey="6" id="Saturday">Saturday</MenuItem>
          <MenuItem eventKey="7" id="Sunday">Sunday</MenuItem>
        </DropdownButton>
      </ButtonToolbar>
    </div>
  )
}

export default DropDown;
