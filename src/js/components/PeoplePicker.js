import React, { Component } from "react";
import styled from 'styled-components';
import Context from '../context/Context';
import ContextProviderAdultInfo from '../providers/ContextProviderAdultInfo';
import ContextProviderChildrenInfo from '../providers/ContextProviderChildrenInfo';

// Styled components
import RoomInfoMenus from '../partials/RoomInfoMenus';
import RoomInfoMenuSection from '../partials/RoomInfoMenuSection';
import AdultSelect from '../partials/AdultSelect';
import ChildrenSelect from '../partials/ChildrenSelect';

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

    return (
      <RoomInfoMenus>
        <RoomInfoMenuSection>
          <span>Adults (18+)</span>
          <AdultSelect id={ adultsMenu }>
            <ContextProviderAdultInfo>
              { this.getAdultsNum() }
            </ContextProviderAdultInfo>
          </AdultSelect>
        </RoomInfoMenuSection>
        <RoomInfoMenuSection>
          <span>Children (0-17)</span>
          <ChildrenSelect id={ childrenMenu }>
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
