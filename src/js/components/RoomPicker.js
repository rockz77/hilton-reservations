import React from "react";
import styled from 'styled-components';

// Components
import PeoplePicker from "../components/PeoplePicker";

var selectedElement: null;
var roomNumber = null;

export default class RoomPicker extends React.Component {
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
      const defaultSelectMenusArr = defaultRoom.querySelectorAll('select.select-menu');
      defaultRoom.classList.remove('disabled');
      defaultRoom.querySelector('label').style.fontWeight = 'bold';
      for(var i=0; i<defaultSelectMenusArr.length; i++) {
          defaultSelectMenusArr[i].removeAttribute('disabled');
      }
    }
  }

  // Enable and disable elements according to state of room selection component
  componentDidUpdate() {
    if (this.state.selected === true) {
      for (var j=roomNumber.roomnumber; j>1; j--) {
        let selectedWrapperId = `room${j}-wrapper`;
        let selectedId = document.getElementById(selectedWrapperId);
        let selectMenusArr = selectedId.querySelectorAll('select.select-menu');
        selectedId.querySelector('.room-checkbox').checked = true;
        selectedId.classList.remove('disabled');
        selectedId.querySelector('label').style.fontWeight = 'bold';
        for(var i=0; i<selectMenusArr.length; i++) {
            selectMenusArr[i].removeAttribute('disabled');
        }
      }
    } else {
      const roomWrapper = document.querySelectorAll('.room-info-wrapper');
      for (var j=roomNumber.roomnumber; j<roomWrapper.length+1; j++) {
        let selectedWrapperId = `room${j}-wrapper`;
        let selectedId = document.getElementById(selectedWrapperId);
        let selectMenusArr = selectedId.querySelectorAll('select.select-menu');
        selectedId.querySelector('.room-checkbox').checked = false;
        selectedId.classList.add('disabled');
        selectedId.querySelector('label').style.fontWeight = 'normal';
        for(var i=0; i<selectMenusArr.length; i++) {
            selectMenusArr[i].setAttribute('disabled','disabled');
            selectMenusArr[i].selectedIndex = null;
        }
      }
    }
  }

  // Set component state when user selects a room(s).
  handleSelected(e) {
    const isChecked = e.target.checked;
    const inputValue = e.target.value;
    this.selectedElement = e.target;
    if (isChecked == true) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
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
      for: roomname
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
