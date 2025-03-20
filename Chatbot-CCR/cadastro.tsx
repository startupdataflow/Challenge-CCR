import React from 'react';
import Header from '../components/Header';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 flex justify-center">
        <RegisterForm />
      </main>
    </div>
  );
};

export default RegisterPage;