import React from 'react';

var footerCss  =  require("../../css/footer.css");

export default class ComponentFooter extends React.Component{

  render(){
    return (
      <footer class={footerCss.miniFooter}>
        <h1>这里是页脚</h1>
      </footer>
    )
  }
}
