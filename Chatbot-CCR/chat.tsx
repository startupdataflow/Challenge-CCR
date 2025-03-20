import React from 'react';
import Header from '../components/Header';
import ChatMessage from '../components/ChatMessage';

const ChatPage: React.FC = () => {
  const messages = [
    { sender: 'CCR', message: 'Olá, como eu poderia te ajudar hoje?', time: '00:02' },
    { sender: 'Carlos', message: 'Quanto tempo eu levo da estação Júlio Prestes até a estação Amador Bueno?', time: '00:05', isUser: true },
    { sender: 'CCR', message: 'Olá, Carlos! O tempo que leva da Estação Amador Bueno para a Estação Júlio Prestes leva em média uma hora e meia.', time: '00:07' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-bold mb-4">Chat</h2>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} {...msg} />
          ))}
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Digite sua mensagem"
            className="w-full p-2 border rounded"
          />
        </div>
      </main>
    </div>
  );
};

export default ChatPage;