import React, { useState } from 'react';

export default function LowBandwidthToggle() {
  const [lowBandwidth, setLowBandwidth] = useState(false);
  return (
    <button onClick={() => setLowBandwidth(!lowBandwidth)}
      className="fixed bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full text-xs z-50">
      {lowBandwidth ? '📶 Normal' : '📉 Low Data'}
    </button>
  );
}
