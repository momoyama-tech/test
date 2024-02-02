import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventDetails" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

