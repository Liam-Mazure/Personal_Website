import './App.css';
import Navbar from './components/navbar';
import Info from './components/info';
import Projects from './components/projects';
import About from './components/about';
import Resume from './components/resume';
import Contact from './components/contact';
import Home from './components/home';
import { Route, Routes} from 'react-router-dom';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <>
      <Navbar />
      <div className = 'container'>
        <ScrollToTop/>
          <Routes>
            <Route exact path='/' element ={<Home/>} />
            <Route path='/projects' element ={<Projects/>} />
            <Route path='/about' element ={<About/>} />
            <Route path='/resume' element ={<Resume/>} />
            <Route path='/contact' element ={<Contact/>} />
          </Routes>
      </div>
      <Info/>
    </>
  )
}

export default App
