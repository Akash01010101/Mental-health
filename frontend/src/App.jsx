import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import './App.css';
import Books from './pages/Books';
import Addiction from './pages/Addiction';
import MentalHealth from './pages/MentalHealth';
import Meditations from './pages/Meditations';
import Ai from './components/Ai';
import Support from './pages/Support'
import ChatsPage from './pages/ChatsPage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/MentalHealth" element={<MentalHealth/>} />
        <Route path="/Addiction" element={<Addiction />} />
        <Route path="/meditations" element={<Meditations />} />
        <Route path='/Support' element={<Support/>}/>
        <Route path='/chats' element={<ChatsPage/>}/>
      </Routes>
      <Ai/>
    </Router>
  );
}

export default App;
