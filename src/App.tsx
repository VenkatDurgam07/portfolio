import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Highlights from './components/Highlights';
import CategoriesGrid from './components/CategoriesGrid';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Documents from './components/Documents';
import Extracurriculars from './components/Extracurriculars';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <CategoriesGrid />
      <Leadership />
      <Education />
      <Certificates />
      <Documents />
      <Extracurriculars />
      <Gallery />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
