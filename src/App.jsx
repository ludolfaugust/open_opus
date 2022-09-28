import React from 'react';
import './App.css';
import GetEssentials from './composers/essentials/GetEssentials';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch,

} from "react-router-dom";
import EssentialId from './composers/essentials/EssentialId';
import EssentialsCard from './composers/essentials/EssentialsCard';




function App() {
  return (
    <div className="App">
    

    <GetEssentials />
      
    </div>
  );
}

export default App;
