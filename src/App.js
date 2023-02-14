import './App.css';
import Nav from "./route/Nav";
import {Routes , Route } from "react-router-dom";
import Main from './component/Main';
import HomeContainer from "././containers/HomeContainer";
import Counter from "./Highordercomponent/Count";
import Cycle from "./lifecomponent/Cycle";
import Hook from './hook/Allhook';
import Get from './api/getapi';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>} exact></Route>
        <Route path ="/main/:name" element={<Main/>} exact></Route>
        <Route path ="/home" element={ <HomeContainer/>} exact></Route>
        <Route path ="/count" element={ <Counter/>} exact></Route>
        <Route path ="/lifecycle" element={ <Cycle/>} exact></Route>
        <Route path ="/hook" element={ <Hook/>} exact></Route>
        <Route path ="/api" element={ <Get/>} exact></Route>
      </Routes>
    </div>
  );
}
export default App;










