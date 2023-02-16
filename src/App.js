//import logo from './logo.svg';
import './App.css';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Hi from './Hi';
//import SelectSearch from 'react-select-search';


function App() {
 
     return(
    <div className="app">
      <h1>Weather App</h1>
      <Home />  
      {/* <Hi /> */}
      
    </div>
  );
}

export default App;
