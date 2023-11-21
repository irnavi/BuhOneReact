
import './App.css';
import Footer2 from './components/footer2/Footer2';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Cases from './pages/Cases';
import Home from './pages/Home';
import Service from './pages/Service';






function App() {
  return (
    <>
   
          <Header />
          <Home />
          <Service />
          <About />
          <Cases />
          <Footer />
          <Footer2 /> 
    </>
  );
}

export default App;


