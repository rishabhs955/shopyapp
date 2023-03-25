import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Fashion from './components/FashionPage/Fashion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/fashion" element={<Fashion />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
