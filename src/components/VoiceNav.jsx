import React from 'react';
import { useVoice } from '../hooks/useVoice';

export default function VoiceNav({ onCommand }) {
  const { isListening, startListening, transcript } = useVoice();
  return (
    <button onClick={startListening}
      className="fixed bottom-4 left-4 p-3 bg-blue-600 text-white rounded-full z-50">
      {isListening ? '🔴 Listening...' : '🎤'}
    </button>
  );
}
