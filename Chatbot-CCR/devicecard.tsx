import React from 'react';

interface DeviceCardProps {
  name: string;
  time: string;
  days: string;
}

const DeviceCard: React.FC<DeviceCardProps> = ({ name, time, days }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{time}</p>
      <p className="text-sm text-gray-500">{days}</p>
    </div>
  );
};

export default DeviceCard;