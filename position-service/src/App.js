import React from "react";
import './App.css';
import headerBar from './components/headerBar';
import mainCalendar from './components/mainCalendar';
import sideBar from './components/sideBar';


const App = () => {
  return (
      <body>
        <div>
          <div>
            <sideBar className="side"/>
          </div>
          <div class="main">
            <headerBar>headerBar</headerBar>
            <mainCalendar>main</mainCalendar>
          </div>
        </div>
      </body>
  );
}

export default App;
