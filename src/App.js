import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* ホームページへのデフォルトパス */}
        <Route path="/event-details" element={<EventDetails />} /> {/* URLの構造を改善 */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
