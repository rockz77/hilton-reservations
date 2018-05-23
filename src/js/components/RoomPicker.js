import React, { Component } from "react";
import styled from 'styled-components';

// Components
import PeoplePicker from '../components/PeoplePicker';

// Styled components
import RoomInfoWrapper from '../partials/RoomInfoWrapper';
import RoomInfoHeader from '../partials/RoomInfoHeader';
import RoomCheckBox from '../partials/RoomCheckBox';
import RoomCheckboxLabel from '../partials/RoomCheckboxLabel';

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

  setDefaultRoom(defaultRoom) {
    const defaultSelectMenusArr = [].slice.call(defaultRoom.querySelectorAll('select.select-menu'));
    defaultRoom.classList.remove('disabled');
    defaultRoom.querySelector('label').style.fontWeight = 'bold';
    defaultSelectMenusArr.map(item => item.removeAttribute('disabled'));
  }

  // Enable default room 1 elements on component initialization
  componentDidMount() {
    const defaultRoom = document.getElementById('room1-wrapper');
    if (defaultRoom) {
        this.setDefaultRoom(defaultRoom);
    }
  }

  commonToggleElements(baseNum, booleanChecked, fontWeight, disable) {
    let selectedWrapperId = `room${baseNum}-wrapper`;
    let selectedId = document.getElementById(selectedWrapperId);
    let selectMenusArr = [].slice.call(selectedId.querySelectorAll('select.select-menu'));
    selectedId.querySelector('.room-checkbox').checked = booleanChecked;
    selectedId.querySelector('label').style.fontWeight = fontWeight;
    if (disable === false) {
      selectedId.classList.remove('disabled');
      selectMenusArr.map(item => item.removeAttribute('disabled'));
    } else {
      selectedId.classList.add('disabled');
      selectMenusArr.map(item => {item.setAttribute('disabled','disabled'), item.selectedIndex = null});
    }
  }

  enableElements() {
    for (var j=roomNumber.roomnumber; j>1; j--) {
      this.commonToggleElements(j, true, 'bold', false);
    }
  }

  disableElements() {
    const roomWrapper = document.querySelectorAll('.room-info-wrapper');
    for (var j=roomNumber.roomnumber; j<roomWrapper.length+1; j++) {
      this.commonToggleElements(j, false, 'normal', true);
    }
  }

  toggleElements() {
    const checkSelected = (this.state.selected === true) ? this.enableElements() : this.disableElements();
    return checkSelected;
  }

  // Enable and disable elements according to state of room selection component
  componentDidUpdate() {
    this.toggleElements();
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
    roomNumber = { roomnumber };

    return (
      <RoomInfoWrapper id={ RoomInfoWrapperId }>
        <RoomInfoHeader>
          <RoomCheckBox name={ RoomCheckboxName } id={ roomname } value={ roomname } onChange={ this.handleSelected.bind(this) } />
          <RoomCheckboxLabel htmlFor={ roomname }>Room { roomnumber }</RoomCheckboxLabel>
        </RoomInfoHeader>
        <PeoplePicker adultsMenu={ adultsmenu } childrenMenu={ childrenmenu }/>
      </RoomInfoWrapper>
    );

  }
}

export default RoomPicker;
