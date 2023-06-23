import React, { useEffect, useState } from 'react';

const IPDisplay = ({ version }) => {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch(`https://api.ipify.org?format=json&${version}`);
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIPAddress();
  }, [version]);

  return (
    <div>
      <p>Public {version} Address: {ipAddress}</p>
    </div>
  );
};

export default IPDisplay;
