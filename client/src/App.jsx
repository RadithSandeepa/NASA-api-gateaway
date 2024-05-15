import  './app.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import APOD from './pages/apod/APOD';
import NEOWS from './pages/neows/NEOWS';
import EPIC from './pages/epic/EPIC';

function App() {
  return (
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/apod" element={<APOD />}/>
              <Route path="/neows" element={<NEOWS />}/>
              <Route path="/epic" element={<EPIC />}/>
            </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;
