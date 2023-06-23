import React, { useEffect, useState } from 'react';
import WebSocket from 'react-websocket';

const PacketLatency = () => {
  const [latency, setLatency] = useState(null);
  const [isCalculating, setIsCalculating] = useState(true);

  const handleData = (data) => {
    const packet = JSON.parse(data);
    if (packet && packet.data && packet.data.timestamp) {
      const packetTimestamp = packet.data.timestamp;
      const currentTimestamp = Date.now();
      const currentLatency = currentTimestamp - packetTimestamp;
      setLatency(currentLatency);
      setIsCalculating(false);
    }
  };

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setLatency(null);
      setIsCalculating(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsCalculating(false);
      }, 2000); // Wait for 2 seconds before showing "No data"
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <h2>Packet Latency</h2>
      <p>Latency: {isCalculating ? 'Calculating...' : (latency !== null ? `${latency}ms` : 'No data')}</p>
      <WebSocket url="ws://localhost:55455" onMessage={handleData} />
    </div>
  );
};

export default PacketLatency;
