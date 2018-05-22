import React, { Component, createContext } from 'react';
import Context from '../context/Context';

class ContextProviderRoomInfo extends Component {
  constructor() {
    super();
    this.state = {
      roomInfo: []
    }
  }

  getData() {
    fetch('../../../data/roomData.json')
    .then(response => response.json())
    .then(json => this.setState({ roomInfo: json }));
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Context.Provider value={{ roomDetails: this.state.roomInfo }}>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default ContextProviderRoomInfo;
