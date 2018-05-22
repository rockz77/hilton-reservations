import React, { Component } from "react";
import styled from 'styled-components';
import Context from '../context/Context';
import ContextProviderAdultInfo from '../providers/ContextProviderAdultInfo';
import ContextProviderChildrenInfo from '../providers/ContextProviderChildrenInfo';

class PeoplePicker extends Component {
  // Context.Consumer. Get number of adults in room for dropdown
  getAdultsNum() {
    return (<Context.Consumer>
      { context => { return(context.adultDetails.map(adultsNum => {
          return( <option key={ adultsNum } value={ "adults-" + adultsNum }>{ adultsNum }</option> );
      }))}}
    </Context.Consumer>)
  }

  // Context.Consumer. Get number of children in room for dropdown
  getChildrenNum() {
    return (<Context.Consumer>
      { context => { return(context.childrenDetails.map(childrenNum => {
          return( <option key={ childrenNum } value={ "children-" + childrenNum }>{ childrenNum }</option> );
      }))}}
    </Context.Consumer>)
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
          <AdultSelect>
            <ContextProviderAdultInfo>
              { this.getAdultsNum() }
            </ContextProviderAdultInfo>
          </AdultSelect>
        </RoomInfoMenuSection>
        <RoomInfoMenuSection>
          <span>Children (0-17)</span>
          <ChildrenSelect>
            <ContextProviderChildrenInfo>
              { this.getChildrenNum() }
            </ContextProviderChildrenInfo>
          </ChildrenSelect>
        </RoomInfoMenuSection>
      </RoomInfoMenus>
    );
  }
}

export default PeoplePicker;
