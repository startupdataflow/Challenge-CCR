import React from 'react';
import Header from '../components/Header';
import TeamMemberCard from '../components/TeamMemberCard';

const SobrePage: React.FC = () => {
  const teamMembers = [
    {
      name: 'André Ramalho Ward',
      rm: '560930',
      linkedin: 'https://linkedin.com/in/wardandre',
      github: 'https://github.com/WardAndre',
    },
    {
      name: 'Renato de Angelo',
      rm: '560585',
      linkedin: 'https://linkedin.com/in/renatodeangelo',
      github: 'https://github.com/RenatodeAngelo1992',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-bold mb-6">Sobre Nós</h2>
        <p className="text-gray-700 mb-8">
          Consultoria, desenvolvimento e inteligência de dados para transformar ideias em realidades digitais.
        </p>
        <p className="text-gray-700 mb-8">
          Oferecemos soluções personalizadas, combinando expertise em tecnologia e dados para otimizar processos e
          impulsionar a inovação nos negócios.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default SobrePage;