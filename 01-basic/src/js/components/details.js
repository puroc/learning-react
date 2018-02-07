import React from 'react';
import ComponentHeader from './header';
export default class ComponentDetails extends React.Component {
  render() {
    return (
      <div>
        <ComponentHeader/>
        <h2>这里是嵌套在首页中的详细的页面</h2>
      </div>
      );
  }
  ;
}
