import React from "react";
import styled from 'styled-components';

const adultsNumArr = [1,2];
const childrenNumArr = [0,1,2];

export default class RoomPicker extends React.Component {
  // Get number of adults in room for dropdown
  getAdultsNum() {
    return adultsNumArr.map(adultsNum => {
        return( <option value={ "adults-" + adultsNum }>{ adultsNum }</option> );
    });
  }

  // Get number of children in room for dropdown
  getChildrenNum() {
    return childrenNumArr.map(childrenNum => {
        return( <option value={ "children-" + childrenNum }>{ childrenNum }</option> );
    });
  }

  render() {
    const { adultsMenu, childrenMenu } = this.props;

    // Styled components
    const RoomInfoMenus = styled.div.attrs({
      className: 'room-info-menus'
    })``;
    const RoomInfoMenuSection = styled.div.attrs({
      className: 'room-info-menu-section'
    })`
      float: left;
      margin: 10px 10px 10px 8px;
    `;
    const AdultSelect = styled.select.attrs({
      name: 'adultsMenu',
      className: 'select-menu adult-menu',
      disabled: 'disabled',
      id: adultsMenu
    })``;
    const ChildrenSelect = styled.select.attrs({
      name: 'childrenMenu',
      className: 'select-menu children-menu',
      disabled: 'disabled',
      id: childrenMenu
    })``;

    return (
      <RoomInfoMenus>
        <RoomInfoMenuSection>
          <span>Adults (18+)</span>
          <AdultSelect>{ this.getAdultsNum() }</AdultSelect>
        </RoomInfoMenuSection>
        <RoomInfoMenuSection>
          <span>Children (0-17)</span>
          <ChildrenSelect>{ this.getChildrenNum() }</ChildrenSelect>
        </RoomInfoMenuSection>
      </RoomInfoMenus>
    );
  }
}
