import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <MainBody/>
      <Footer/>
    </div>
  );
}

export default App;
