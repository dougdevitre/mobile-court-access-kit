import React from 'react';
import { useOffline } from '../hooks/useOffline';

export default function OfflineIndicator() {
  const isOffline = useOffline();
  if (!isOffline) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-black text-center p-2 text-sm z-50">
      You are offline. Some features may be limited.
    </div>
  );
}
