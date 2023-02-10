import './App.css';
import Nav from "./route/Nav";
import {Routes , Route } from "react-router-dom";
import Main from './component/Main';
import HomeContainer from "././containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav/>} exact></Route>
        <Route path ="/main/:name" element={<Main/>} exact></Route>
          <Route path ="/home" element={ <HomeContainer/>} exact></Route>

      </Routes>
    </div>
  );
}
export default App;


// import './App.css';
// import HomeContainer from "././containers/HomeContainer";
// function App() {
//   return (
//     <div className="App">
//       <HomeContainer/>
//     </div>
//   );
// }
// export default App;