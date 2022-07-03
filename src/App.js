import Navbar from './components/Navbar.js'
import './App.css';
import Home from './components/Home.js';
import SocialLinks from './components/SocialLinks.js';
import About from './components/About';
import Portfolio from './components/Portfolio.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
