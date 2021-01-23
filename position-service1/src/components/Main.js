import React from 'react';
import './Main.css'
import headerBar from './headerBar';
import mainCalendar from './mainCalendar';
import sideBar from './sideBar';


function Main() {
    return (
        <div className="background">
            <sideBar/>
        </div>
    );
}


export default Main;