import React from 'react';
import { Link } from 'react-router-dom'
export default class ComponentHeader extends React.Component {
  render() {
    return (
      <header className="smallFontSize">
        <h1>这里是页头</h1>
        <ul>
          <li>
            <Link to={ `/` }>
              首页
            </Link>
          </li>
          <li>
            <Link to={ `/details` }>
              嵌套的详情页面
            </Link>
          </li>
          <li>
            <Link to={ `/list/1234` }>
              列表页面
            </Link>
          </li>
        </ul>
      </header>
    )
  }
}
