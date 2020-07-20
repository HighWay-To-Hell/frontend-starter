import React from 'react'
import { Link } from 'react-router-dom'

class NavTop extends React.Component {

  constructor(props){
    super(props)
  }

  onLogout(){
    return null
  };

  render() {
    return (
      <nav className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>Happy</b>Mall</Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;">
              <i className="fa fa-user fa-fw"></i>
              <span>欢迎: admin</span>
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#" onClick={this.onLogout()}>
                  <i className="fa fa-sign-out fa-fw"></i>
                  Logout
                </a>
              </li>
            </ul>

          </li>

        </ul>
      </nav>
    )
  }
}

export default NavTop