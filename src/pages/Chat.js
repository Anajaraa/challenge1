import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((msgs) => [...msgs, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('chat_message', {
        username: username || 'Anonymous',
        message,
        room: 'general',
        timestamp: new Date().toISOString()
      });
      setMessage('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-gray-900 rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
        </div>
        <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-800 rounded">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span className="text-[#00ff00]">{msg.username}: </span>
              <span className="text-white">{msg.message}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 rounded bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-[#00ff00] text-black rounded hover:bg-[#00dd00]"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;