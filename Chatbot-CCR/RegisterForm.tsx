import React from 'react';

const RegisterForm: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Criar Conta</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nome</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Nome" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Sobrenome</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Sobrenome" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Data de Nascimento</label>
          <input type="date" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">CEP</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="CEP" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Endereço</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Endereço" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Telefone</label>
          <input type="tel" className="w-full p-2 border rounded" placeholder="Telefone" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">E-mail</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="E-mail" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input type="password" className="w-full p-2 border rounded" placeholder="Senha" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Confirmar Senha</label>
          <input type="password" className="w-full p-2 border rounded" placeholder="Confirmar Senha" />
        </div>
        <div className="flex justify-between">
          <button type="button" className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
            Cancelar
          </button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Avançar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;