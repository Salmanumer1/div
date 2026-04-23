import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EventProvider } from "./components/EventContext.jsx";
import NavBar from './components/NavBar.jsx';
import TextBox from './components/TextBox.jsx';
import About from './components/About.jsx';
import CalendarApp from "./components/CalenderApp.jsx";
import Home from "./components/Home.jsx";
import Calender from "./components/Calender.jsx";
import Alert from "./components/Alert.jsx";



function App() {
  return (
        <EventProvider> 
    <BrowserRouter>
  
      <NavBar title="Optinex"/>
      <div className="container my-3">
        <Routes>
          
          <Route path="/" element={<Home/>}/>
          <Route path="/TextBox" element={<TextBox/>} />
          <Route path="/about" element={<About />} />
          <Route path="/CalenderApp" element={<CalendarApp/>}/>
          <Route path="/Calender" element={<Calender/>}/>
          <Route path='/alert' element={<Alert/>}/>
        </Routes>
      </div>
    
    </BrowserRouter>
        </EventProvider>
  
  );
}

export default App;