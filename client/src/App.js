import React, {Component} from 'react';
import './css/App.css';
import{ BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./bootstrap/css/bootstrap.min.css";

import EventList from "./components/home/event-list.component.js"
import Home from "./components/home/home.component.js"
import LoginRegister from "./components/LoginRegister.js";


function App() {
  var currentLocation = window.location.pathname;
  if(currentLocation == "/"){
    return (
      <Router>

      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Meet Your Workmates</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="#">Sign out</a>
      </li>
    </ul>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="nav-link">Search</Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="nav-link">Calendar</Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="nav-link">Notifications</Link>
            </li>
            <li class="nav-item">
              <Link to="/create" className="nav-link">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex">

        </div>

        <Route path='/' exact component={LoginRegister} />
        <Route path='/register' exact component={Home} />

      </main>
    </div>
  </div>
  </Router>

    );
  }else{
    return (
      <Router>

      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Meet Your Workmates</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  </header>

  <div class="container-fluid">
    <div class="row">


      <main class="col-md-12">
        <div class="d-flex">

        </div>

        <LoginRegister />

      </main>
    </div>
  </div>
  </Router>

    );
  }

}

export default App;
