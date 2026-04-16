import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import About from './components/About';
import CalendarApp from "./components/CalenderApp";
import Home from "./components/Home";
import Calender from "./components/Calender";

function App() {
  return (
    <BrowserRouter>
      <NavBar title="Optinex"/>
      <div className="container my-3">
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/TextBox" element={<TextBox/>} />
          <Route path="/about" element={<About />} />
          <Route path="/CalenderApp" element={<CalendarApp/>}/>
          <Route path="Calender" element={<Calender/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;