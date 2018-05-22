import React, { Component, createContext } from 'react';
import Context from '../context/Context';

class ContextProviderChildrenInfo extends Component {
  constructor() {
    super();
    this.state = {
      childrenInfo: []
    }
  }

  getData() {
    fetch('../../../data/peopleData.json')
    .then(response => response.json())
    .then(json => this.setState({ childrenInfo: json.peopleInfo.childrenInfo }));
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <Context.Provider value={{ childrenDetails: this.state.childrenInfo }}>
        { this.props.children }
      </Context.Provider>
    );
  }
}

export default ContextProviderChildrenInfo;
