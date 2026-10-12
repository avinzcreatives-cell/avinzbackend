import React, { useState, useRef, useEffect } from 'react';
import { sendAIChatMessage } from '../services/api';

const AvinzAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! I am the Avinz Creatives AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await sendAIChatMessage(newMessages);
      if (res.success) {
        setMessages([...newMessages, { role: 'ai', text: res.reply }]);
      } else {
        setMessages([...newMessages, { role: 'ai', text: 'Sorry, I encountered an error. Please try again later.' }]);
      }
    } catch (error) {
      setMessages([...newMessages, { role: 'ai', text: 'Oops! Unable to connect to the AI service right now.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={toggleChat}
        className="btn btn-primary rounded-circle shadow-lg position-fixed d-flex align-items-center justify-content-center"
        style={{
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          zIndex: 1050,
          background: 'linear-gradient(135deg, #110A5C, #110A5C)',
          border: 'none',
          transition: 'transform 0.3s ease'
        }}
        aria-label="Open AI Chat"
      >
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-stars'} text-white fs-4`}></i>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="position-fixed shadow-2xl rounded-4 overflow-hidden d-flex flex-column"
          style={{
            bottom: '100px',
            right: '24px',
            width: '350px',
            height: '500px',
            maxWidth: 'calc(100vw - 48px)',
            zIndex: 1050,
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0'
          }}
        >
          {/* Header */}
          <div className="bg-primary text-white p-3 d-flex align-items-center justify-content-between" style={{ background: 'linear-gradient(135deg, #110A5C, #110A5C)' }}>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-robot fs-5"></i>
              <h6 className="mb-0 fw-bold">Avinz AI</h6>
            </div>
            <button onClick={toggleChat} className="btn btn-sm btn-link text-white p-0">
              <i className="bi bi-dash-lg fs-5"></i>
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow-1 p-3 overflow-auto" style={{ backgroundColor: '#f8fafc' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`d-flex mb-3 ${msg.role === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div
                  className={`p-2 px-3 rounded-3 shadow-sm ${
                    msg.role === 'user' ? 'bg-primary text-white' : 'bg-white text-dark border'
                  }`}
                  style={{ maxWidth: '85%', fontSize: '0.9rem', wordBreak: 'break-word' }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="d-flex mb-3 justify-content-start">
                <div className="p-2 px-3 rounded-3 bg-white text-dark border shadow-sm" style={{ fontSize: '0.9rem' }}>
                  <div className="spinner-grow spinner-grow-sm text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-top">
            <form onSubmit={handleSend} className="d-flex gap-2">
              <input
                type="text"
                className="form-control rounded-pill"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                style={{ fontSize: '0.9rem' }}
              />
              <button
                type="submit"
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                disabled={!input.trim() || isLoading}
                style={{ width: '38px', height: '38px' }}
              >
                <i className="bi bi-send-fill fs-6"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AvinzAI;
