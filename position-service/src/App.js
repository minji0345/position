import './App.css';
import headerBar from './components/headerBar';
import mainCalendar from './components/mainCalendar';
import sideBar from './components/sideBar';


function App() {
  return (
    <>
      <div class="display">
        <div>
          <sideBar>sideBar</sideBar>
        </div>
        <div class="main">
          <headerBar>headerBar</headerBar>
          <mainCalendar>mainCalendar</mainCalendar>
        </div>
      </div>
    </>
  );
}

export default App;
