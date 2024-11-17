
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Course from './pages/Course'
import Contact from './pages/Contact'
import Review from './pages/Review'
import Services from './pages/Services'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Course" element={<Course/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Review" element={<Review/>}/>
          <Route path="/Services" element={<Services/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;