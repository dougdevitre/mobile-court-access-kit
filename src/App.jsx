import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CaseStatus from './pages/CaseStatus';
import FilingWizard from './pages/FilingWizard';
import OfflineIndicator from './components/OfflineIndicator';
import LowBandwidthToggle from './components/LowBandwidthToggle';

export default function App() {
  return (
    <BrowserRouter>
      <OfflineIndicator />
      <LowBandwidthToggle />
      <div className="min-h-screen bg-gray-50 p-4 max-w-md mx-auto">
        <header className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-800">Court Access</h1>
          <p className="text-sm text-gray-500">Justice from your phone</p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-status" element={<CaseStatus />} />
          <Route path="/filing" element={<FilingWizard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
