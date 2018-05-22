import React, { Component, createContext } from 'react';
import Context from '../context/Context';

class ContextProviderAdultInfo extends Component {
  constructor() {
    super();
    this.state = {
      adultInfo: []
    }
  }

  getData() {
    fetch('../../../data/peopleData.json')
    .then(response => response.json())
    .then(json => this.setState({ adultInfo: json.peopleInfo.adultInfo }));
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Context.Provider value={{ adultDetails: this.state.adultInfo }}>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default ContextProviderAdultInfo;
