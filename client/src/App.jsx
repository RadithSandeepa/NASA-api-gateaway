import  './app.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import APOD from './pages/apod/APOD';
import NEOWS from './pages/neows/NEOWS';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/apod" element={<APOD />}/>
              <Route path="/neows" element={<NEOWS />}/>
            </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;
