import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <header>
        <nav class="navbar navbar-expand navbar-light bg-light fixed-top justify-content-end">
          <span style="font-size:18px;font-weight:700">
            Pod Interface</span>
            <ul class="navbar-nav mr-auto mx-auto justify-content-center">
      <li class="nav-item active">
        <a class="nav-link" href="#">Overview<span class="sr-only">(current)</span></a>
      </li><li class="nav-item ">
        <a class="nav-link" href="#">Contacts<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Apps<span class="sr-only">(current)</span></a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Data<span class="sr-only">(current)</span></a>
      </li>
    </ul>
          <div>
            <img src="images/Overview/Ellipse.svg"/> Colin Böhning
          </div>
        </nav>
      </header>
  <div class="container-full bg-light">
    <div class="row px-4 py-4">
      <div class="col-12">
  <ul class="nav nav-tabs">
  <li class="active"><a href="#">Open requests</a></li>
  <li><a href="#">Activity</a></li>
  <li><a href="#">Consent</a></li>
</ul>
</div>
</div>
</div>
<footer>
  <div class="container-full bg-light">
    <div class="row px-4 py-4">
      <div class="col-6">
        © 2019 Dr. Martens
      </div>
      <div class="col-6 d-flex justify-content-end">
        Imprint | Data privacy
      </div>
    </div>
    </div>
</footer>
</div>
    );
  }
}

export default App;
