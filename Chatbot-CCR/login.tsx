import React from 'react';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 flex justify-center">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;