import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Commons from './views/Commons';
import PDFViewer  from './util/PDFViewer';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main className='main-content'>
            <Routes>
                <Route path="/commons" element={<Commons />} />
                <Route path="/commons/documentation" element={<PDFViewer />} />
            </Routes>
        </main>
    </BrowserRouter>
  );
};

export default App;