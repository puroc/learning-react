import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';
import { Input } from 'antd';

export default class BodyIndex extends React.Component {
  constructor() {
    super(); //调用基类的所有的初始化方法
    this.state = {
      username: "Parry",
      age: 20
    }; //初始化赋值
  }
  ;

  handleChildValueChange(event) {
    this.setState({
      age: event.target.value
    });
  }
  ;

  handleClick(username, age) {
    this.setState({
      username: username,
      age: age
    });
    console.log(this.refs.submitButton);
    this.refs.submitButton.style.color = 'red';
  }

  render() {
    // setTimeout(()=>{
    //   //更改 state 的时候
    //   this.setState({username: "IMOOC",age : 30});
    // },4000);
    return (
      <div>
        <h2>页面的主体内容</h2>
        <Input placeholder="Basic usage" />
        <input
               id="submitButton"
               ref="submitButton"
               type="button"
               value="提交"
               onClick={ this.handleClick.bind(this, "pud", 27) } />
        <p>
          从首页面获得的参数[props] id:
          { this.props.id },userid:
          { this.props.userid },username:
          { this.props.username }
        </p>
        <p>
          本组件的状态值[state] username:
          { this.state.username },age:
          { this.state.age }
        </p>
        <h2>下面是子页面内容</h2>
        <BodyChild
                   {...this.props}
                   handleChildValueChange={ this.handleChildValueChange.bind(this) } />
      </div>
    )
  }
}

