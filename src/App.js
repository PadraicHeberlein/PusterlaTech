import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Docs from './view/docs';
import PDFViewer  from './util/pdf-viewer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='main-content'>
        <Routes>
          <Route path="/documentation" element={<Docs />} />
          <Route path="/documentation/robots" element={<PDFViewer />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;