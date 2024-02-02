import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Instrument } from './pages/instruments';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="" component={Dashboard} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/instruments" element={<Instrument />} />
      </Routes>
    </Router>
  );
};
