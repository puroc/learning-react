import React from 'react';

export default class BodyChild extends React.Component{

  render(){
    return(
      <div>
        <p>子页面和父页面双向数据绑定，文本框输入值，父页面state的年龄会变：<input type="text" onChange={this.props.handleChildValueChange}/></p>
        <p>子页面从父页面获得的参数为：id:{this.props.id},userid:{this.props.userid},username:{this.props.username}</p>
      </div>
    )
  }

}
