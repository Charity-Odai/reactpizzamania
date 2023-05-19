import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-default navbar-home">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="a">PIZZAMANIA</a>
            </div>
 
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="a"><i className="fa-sharp fa-solid fa-house"></i> Home</a></li>
                    <li><a href="a">About Pizza</a></li>
                    <li><a href="a ">Pizza Types</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar