import React from 'react';
import ComponentHeader from './header';
export default class ComponentList extends React.Component {
  render() {
    return (
      <div>
        <ComponentHeader/>
        <h2>这里是列表页面 Id: { this.props.match.params.id }</h2>
      </div>
      );
  }
  ;
}
