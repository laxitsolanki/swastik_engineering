import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Component/header/About';
// import Services from './Component/Services';
import Contact from './Component/header/contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
