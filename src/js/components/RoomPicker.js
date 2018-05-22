import React, { Component } from "react";
import styled from 'styled-components';

// Components
import PeoplePicker from "../components/PeoplePicker";

var selectedElement: null;
var roomNumber = null;

class RoomPicker extends Component {
  constructor(props){
      super(props);
      this.state = {
          selected: false
      }
      this.componentDidMount();
  }

  // Enable default room 1 elements on component initialization
  componentDidMount() {
    const defaultRoom = document.getElementById('room1-wrapper');
    if (defaultRoom) {
      const defaultSelectMenusArr = [].slice.call(defaultRoom.querySelectorAll('select.select-menu'));
      defaultRoom.classList.remove('disabled');
      defaultRoom.querySelector('label').style.fontWeight = 'bold';
      defaultSelectMenusArr.map(item => item.removeAttribute('disabled'));
    }
  }

  // Enable and disable elements according to state of room selection component
  componentDidUpdate() {
    if (this.state.selected === true) {
      for (var j=roomNumber.roomnumber; j>1; j--) {
        let selectedWrapperId = `room${j}-wrapper`;
        let selectedId = document.getElementById(selectedWrapperId);
        let selectMenusArr = [].slice.call(selectedId.querySelectorAll('select.select-menu'));
        selectedId.querySelector('.room-checkbox').checked = true;
        selectedId.classList.remove('disabled');
        selectedId.querySelector('label').style.fontWeight = 'bold';
        selectMenusArr.map(item => item.removeAttribute('disabled'));
      }
    } else {
      const roomWrapper = document.querySelectorAll('.room-info-wrapper');
      for (var j=roomNumber.roomnumber; j<roomWrapper.length+1; j++) {
        let selectedWrapperId = `room${j}-wrapper`;
        let selectedId = document.getElementById(selectedWrapperId);
        let selectMenusArrOther = [].slice.call(selectedId.querySelectorAll('select.select-menu'));
        selectedId.querySelector('.room-checkbox').checked = false;
        selectedId.classList.add('disabled');
        selectedId.querySelector('label').style.fontWeight = 'normal';
        selectMenusArrOther.map(item => {item.setAttribute('disabled','disabled'), item.selectedIndex = null});
      }
    }
  }

  // Set component state when user selects a room(s).
  handleSelected(e) {
    const isChecked = e.target.checked;
    const confirmCheck = (isChecked == true) ? this.setState({ selected: true }) : this.setState({ selected: false });
    return confirmCheck;
    this.componentDidUpdate();
  }

  render() {
    const { roomname, roomnumber, adultsmenu, childrenmenu } = this.props;
    let RoomCheckboxName = 'roomNumber-' + roomname;
    let RoomInfoWrapperId = roomname + '-wrapper';

    // Styled components
    const RoomInfoWrapper = styled.div.attrs({
      className: 'room-info-wrapper disabled',
      id: RoomInfoWrapperId
    })`
      float: left;
      width: 140px;
      height: 132px;
      border: 3px solid #eee;
      border-radius: 8px;
      margin: 4px;
    `;
    const RoomInfoHeader = styled.div.attrs({
        className: 'room-info-header'
    })`
      background-color: #eee;
      padding: 6px;
    `;
    const RoomCheckbox = styled.input.attrs({
      type: 'checkbox',
      className: 'room-checkbox',
      name: RoomCheckboxName,
      id: roomname,
      value: roomname
    })``;
    const RoomCheckboxLabel = styled.label.attrs({
      htmlFor: roomname
    })``;

    roomNumber = { roomnumber };

    return (
      <RoomInfoWrapper>
        <RoomInfoHeader>
          <RoomCheckbox onChange={ this.handleSelected.bind(this) } />
          <RoomCheckboxLabel>Room { roomnumber }</RoomCheckboxLabel>
        </RoomInfoHeader>
        <PeoplePicker adultsMenu={ adultsmenu } childrenMenu={ childrenmenu }/>
      </RoomInfoWrapper>
    );

  }
}

export default RoomPicker;
