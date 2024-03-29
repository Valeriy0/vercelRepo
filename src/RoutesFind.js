import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Farming } from './pages/farming';
import { Instrument } from './pages/instruments';
import { Settings } from './pages/settings/index.';
import { Staking } from './pages/staking';

export const RoutesFind = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="" component={Dashboard} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/instruments" element={<Instrument />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/farming" element={<Farming />} />
        <Route path="/staking" element={<Staking />} />
      </Routes>
    </Router>
  );
};
