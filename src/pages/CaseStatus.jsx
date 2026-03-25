import React, { useState } from 'react';

export default function CaseStatus() {
  const [caseNumber, setCaseNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setResult({ caseNumber, status: 'Open', nextHearing: '2025-04-15', judge: 'Hon. Williams' });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Case Status Lookup</h2>
      <form onSubmit={handleSearch} className="space-y-3">
        <input type="text" value={caseNumber} onChange={(e) => setCaseNumber(e.target.value)}
          placeholder="Enter case number" className="w-full p-3 border rounded-lg text-lg" />
        <button type="submit" className="w-full p-3 bg-blue-600 text-white rounded-lg text-lg">Search</button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow">
          <p><strong>Case:</strong> {result.caseNumber}</p>
          <p><strong>Status:</strong> {result.status}</p>
          <p><strong>Next Hearing:</strong> {result.nextHearing}</p>
          <p><strong>Judge:</strong> {result.judge}</p>
        </div>
      )}
    </div>
  );
}
