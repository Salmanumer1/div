import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import About from './components/About';
import CalendarApp from "./components/CalenderApp";

function App() {
  return (
    <BrowserRouter>
      <NavBar title="Optinex" />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextBox/>} />
          <Route path="/about" element={<About />} />
          <Route path="/CalenderApp" element={<CalendarApp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;