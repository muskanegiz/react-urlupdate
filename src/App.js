import './App.css';
import Nav from "./route/Nav";
import {Routes , Route } from "react-router-dom";
import Main from './component/Main';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>} exact></Route>
        <Route path ="/main/:name" element={<Main/>} exact></Route>
      </Routes>
    </div>
  );
}
export default App;
