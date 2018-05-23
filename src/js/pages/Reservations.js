import React, { Component } from "react";
import styled from 'styled-components';
import Context from '../context/Context';
import ContextProviderRoomInfo from '../providers/ContextProviderRoomInfo';
import "../../css/reservations.css";

// Components
import RoomPicker from "../components/RoomPicker";

// Styled components
import RoomReservationForm from '../partials/RoomReservationForm';
import SubmitButton from '../partials/SubmitButton';

class Reservations extends Component {
  // Context.Consumer. Get room info from array. Render room names and checkboxes.
  getRoomInfo() {
    return (<Context.Consumer>
      { context => { return(context.roomDetails.map(roomInfo => <div key={ roomInfo.roomNumber }><RoomPicker roomname={ roomInfo.roomName } roomnumber={ roomInfo.roomNumber } adultsmenu={ roomInfo.adultsMenu } childrenmenu={ roomInfo.childrenMenu }/></div>)) } }
    </Context.Consumer>)
  }

  // Get all values selected in the form. Set values to sessionStorage objects (3).
  getRoomForm(e) {
    e.preventDefault();
    const formElements = {
      roomCheckboxes: [].slice.call(document.querySelectorAll('.room-checkbox')),
      adultsMenu: [].slice.call(document.querySelectorAll('.adult-menu')),
      childrenMenu: [].slice.call(document.querySelectorAll('.children-menu')),
      defaultAdultMenu: document.querySelector('#room1AdultSelect'),
      defaultChildrenMenu: document.querySelector('#room1ChildrenSelect')
    }

    let selectedRooms = formElements.roomCheckboxes.map(room => { if(room.checked){ return room.value } });
    let selectedAdults = formElements.adultsMenu.map(adult => { if(!adult.disabled){ return adult.value } });
    let selectedChildren = formElements.childrenMenu.map(child => { if(!child.disabled){ return child.value } });

    // Default selection of room 1
    selectedRooms.unshift('room1');
    selectedAdults.unshift(formElements.defaultAdultMenu.value);
    selectedChildren.unshift(formElements.defaultChildrenMenu.value);

    sessionStorage.setItem('roomReservationSelectedRooms',selectedRooms);
    sessionStorage.setItem('roomReservationSelectedAdults',selectedAdults);
    sessionStorage.setItem('roomReservationSelectedChildren',selectedChildren);
  }

  // Includes Context.Provider
  render() {
    return (
      <div>
        <RoomReservationForm>
          <ContextProviderRoomInfo>{ this.getRoomInfo() }</ContextProviderRoomInfo>
          <SubmitButton onClick={ this.getRoomForm }>Submit</SubmitButton>
        </RoomReservationForm>
      </div>
    );
  }
}

export default Reservations;
