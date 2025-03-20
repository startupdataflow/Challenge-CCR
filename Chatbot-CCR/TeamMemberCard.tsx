import React from 'react';

interface TeamMemberCardProps {
  name: string;
  rm: string;
  linkedin: string;
  github: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, rm, linkedin, github }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">RM: {rm}</p>
      <div className="space-y-2">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          LinkedIn
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;