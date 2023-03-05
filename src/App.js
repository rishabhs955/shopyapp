import './App.css';
import NavBar from './components/Navbar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import MainBody from './components/MainBody/MainBody';
import '@fortawesome/fontawesome-free/css/all.min.css';

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
