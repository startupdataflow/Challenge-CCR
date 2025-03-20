import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1 className="text-2xl font-bold">SMART HOME</h1>
      <input
        type="text"
        placeholder="Buscar por dispositivo ou palavra chave"
        className="mt-2 p-2 rounded w-full"
      />
    </header>
  );
};

export default Header;