import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Homepage';
import './App.css';
import Books from './Books';
import Addiction from './Addiction';
import MentalHealth from './MentalHealth';
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
