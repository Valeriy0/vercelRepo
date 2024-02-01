import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Instrument } from './pages/instrument';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="" component={Dashboard} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/instrument" element={<Instrument />} />
      </Routes>
    </Router>
  );
};
