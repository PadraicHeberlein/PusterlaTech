import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Commons from './views/Commons';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main className='main-content'>
            <Routes>
                <Route path="/commons" element={<Commons.main />} />
                <Route path="/commons/documentation" element={<Commons.docs.main />} />  
            </Routes>
        </main>
    </BrowserRouter>
  );
};

export default App;