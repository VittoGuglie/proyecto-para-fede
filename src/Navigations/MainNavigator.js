import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppContext from '../context/AppContext.js';

import Home from '../components/pages/Home.js';
import About from '../components/pages/About.js';
import Header from '../components/layout/Header.js';
import Footer from '../components/layout/Footer.js';
import NotFound from '../components/pages/NotFound';  // Asegúrate de importar el componente NotFound

const MainNavigator = () => {
    const { theme } = useContext(AppContext);

    return (
        <div className={`App ${theme}`}>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default MainNavigator;
