import React from 'react';
import ReactDOM from 'react-dom';
import BodyChild from './bodychild';

export default class BodyIndex extends React.Component {
	constructor() {
		super(); //调用基类的所有的初始化方法
		this.state = {
			username: "Parry",
			age: 20
		}; //初始化赋值
	};

	handleChildValueChange(event) {
		this.setState({age: event.target.value});
	};
	
	render() {
		// setTimeout(()=>{
		//   //更改 state 的时候
		//   this.setState({username: "IMOOC",age : 30});
		// },4000);
		return (
			<div>
				<h2>页面的主体内容</h2>
				<p>[props] userid: {this.props.userid},username: {this.props.username}</p>
				<p>[state] username:{this.state.username},age:{this.state.age}</p>
				<BodyChild id={5} handleChildValueChange={this.handleChildValueChange.bind(this)}/>
			</div>
		)
	}
}

