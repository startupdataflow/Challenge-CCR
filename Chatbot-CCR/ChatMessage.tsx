import React from 'react';

interface ChatMessageProps {
  sender: string;
  message: string;
  time: string;
  isUser?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ sender, message, time, isUser = false }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs p-3 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        <p className="text-sm">{message}</p>
        <p className="text-xs text-gray-400 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ChatMessage;