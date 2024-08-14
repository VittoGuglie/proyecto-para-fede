import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContext from './context/AppContext.js'

import Home from './components/pages/Home';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`App ${theme}`}>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
