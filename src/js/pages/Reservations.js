import React from "react";
import styled from 'styled-components';
import "../../css/reservations.css";

// Components
import RoomPicker from "../components/RoomPicker";

// Room Data
const roomInfoArr = [
  {
    roomName: "room1",
    roomNumber: 1,
    adultsMenu: "room1AdultSelect",
    childrenMenu: "room1ChildrenSelect"
  },
  {
    roomName: "room2",
    roomNumber: 2,
    adultsMenu: "room2AdultSelect",
    childrenMenu: "room2ChildrenSelect"
  },
  {
    roomName: "room3",
    roomNumber: 3,
    adultsMenu: "room3AdultSelect",
    childrenMenu: "room3ChildrenSelect"
  },
  {
    roomName: "room4",
    roomNumber: 4,
    adultsMenu: "room4AdultSelect",
    childrenMenu: "room4ChildrenSelect"
  }
];

export default class Reservations extends React.Component {
  // Get room info from array. Render room names and checkboxes.
  getRoomInfo() {
    return roomInfoArr.map(roomInfo => {
        return( <RoomPicker roomname={ roomInfo.roomName } roomnumber={ roomInfo.roomNumber } adultsmenu={ roomInfo.adultsMenu } childrenmenu={ roomInfo.childrenMenu }/> );
    });
  }

  // Get all values selected in the form. Set values to sessionStorage objects (3).
  getRoomForm() {
    let selectedRooms = [];
    let selectedAdults = [];
    let selectedChildren = [];
    const roomCheckboxes = document.querySelectorAll('.room-checkbox');
    const adultsMenu = document.querySelectorAll('.adult-menu');
    const childrenMenu = document.querySelectorAll('.children-menu');

    // Default selection of room 1
    selectedRooms.push('room1');
    const defaultAdultMenu = document.getElementById('room1AdultSelect');
    const defaultChildrenMenu = document.getElementById('room1ChildrenSelect');
    selectedAdults.push(defaultAdultMenu.value);
    selectedChildren.push(defaultChildrenMenu.value);

    for( var i=0; i<roomCheckboxes.length; i++ ) {
      if (roomCheckboxes[i].checked) {
        selectedRooms.push(roomCheckboxes[i].value);
      }
    }

    for( var i=1; i<adultsMenu.length; i++ ) {
      if (!adultsMenu[i].disabled) {
        selectedAdults.push(adultsMenu[i].value);
      }
    }

    for( var i=1; i<childrenMenu.length; i++ ) {
      if (!childrenMenu[i].disabled) {
        selectedChildren.push(childrenMenu[i].value);
      }
    }

    sessionStorage.setItem('roomReservationSelectedRooms',selectedRooms);
    sessionStorage.setItem('roomReservationSelectedAdults',selectedAdults);
    sessionStorage.setItem('roomReservationSelectedChildren',selectedChildren);
  }

  render() {
    // Styled components
    const RoomReservationForm = styled.form.attrs({
      id: 'room-reservation-form',
      name: 'roomReservationForm'
    })``;
    const SubmitButton = styled.button`
      float: left;
      clear: both;
      margin: 12px 6px;
    `;

    return (
      <div>
        <RoomReservationForm>
          { this.getRoomInfo() }
          <SubmitButton onClick={ this.getRoomForm }>Submit</SubmitButton>
        </RoomReservationForm>
      </div>
    );
  }
}
