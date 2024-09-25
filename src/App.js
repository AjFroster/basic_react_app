import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Tours from './components/Tours';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Tours></Tours>
      <About></About>
      <Footer></Footer>
    </>
  );
}

export default App;
