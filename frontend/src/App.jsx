import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import './App.css';
import Books from './pages/Books';
import Addiction from './pages/Addiction';
import MentalHealth from './pages/MentalHealth';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/MentalHealth" element={<MentalHealth />} />
        <Route path="/Addiction" element={<Addiction />} />
      </Routes>
    </Router>
  );
}

export default App;
