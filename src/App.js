import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News pagesize={6} country='in' category="general"/>} />
            <Route path="business" element={<News pagesize={6} country='in' category="business"/>} />
            <Route path="entertainment" element={<News pagesize={6} country='in' category="entertainment"/>} />
            <Route path="health" element={<News pagesize={6} country='in' category="health"/>} />
            <Route path="science" element={<News pagesize={6} country='in' category="science"/>} />
            <Route path="sports" element={<News pagesize={6} country='in' category="sports"/>} />
            <Route path="technology" element={<News pagesize={6} country='in' category="technology"/>} />
          </Routes>
        </div>
      </Router>
    )
  }
}
