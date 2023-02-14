import './App.css';
import Nav from "./route/Nav";
import {Routes , Route } from "react-router-dom";
import Main from './component/Main';
import HomeContainer from "././containers/HomeContainer";
import Counter from "./Highordercomponent/Count";
import Cycle from "./lifecomponent/Cycle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>} exact></Route>
        <Route path ="/main/:name" element={<Main/>} exact></Route>
        <Route path ="/home" element={ <HomeContainer/>} exact></Route>
        <Route path ="/count" element={ <Counter/>} exact></Route>
        <Route path ="/lifecycle" element={ <Cycle/>} exact></Route>
      </Routes>
    </div>
  );
}
export default App;










