import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NewsFeed</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" key="general" aria-current="page" href="/">Home</a>
                        <a className="nav-link" key="business"  href="/business">Business</a>
                        <a className="nav-link" key="entertainment" href="/entertainment">Entertainment</a>
                        <a className="nav-link" key="health" href="/health">Health</a>
                        <a className="nav-link" key="science" href="/science">Science</a>
                        <a className="nav-link" key="sports" href="/sports">Sports</a>
                        <a className="nav-link" key="technology" href="/technology">Technology</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default Navbar
