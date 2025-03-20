import React from 'react';

interface SettingsCardProps {
  title: string;
  options: string[];
}

const SettingsCard: React.FC<SettingsCardProps> = ({ title, options }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <ul className="mt-2">
        {options.map((option, index) => (
          <li key={index} className="text-gray-600">
            <input type="checkbox" id={`option-${index}`} />
            <label htmlFor={`option-${index}`} className="ml-2">{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingsCard;