import React from 'react';

const LoginForm: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Usuário</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="@username" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Senha</label>
          <input type="password" className="w-full p-2 border rounded" placeholder="********" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Entrar
        </button>
      </form>
      <div className="mt-4 text-center">
        <a href="#" className="text-blue-500 text-sm">Esqueceu a senha?</a>
      </div>
    </div>
  );
};

export default LoginForm;