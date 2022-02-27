import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pagesize=6
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News pagesize={this.pagesize} country='in' category="general"/>} />
            <Route path="business" element={<News pagesize={this.pagesize} country='in' category="business"/>} />
            <Route path="entertainment" element={<News pagesize={this.pagesize} country='in' category="entertainment"/>} />
            <Route path="health" element={<News pagesize={this.pagesize} country='in' category="health"/>} />
            <Route path="science" element={<News pagesize={this.pagesize} country='in' category="science"/>} />
            <Route path="sports" element={<News pagesize={this.pagesize} country='in' category="sports"/>} />
            <Route path="technology" element={<News pagesize={this.pagesize} country='in' category="technology"/>} />
          </Routes>
        </div>
      </Router>
    )
  }
}
