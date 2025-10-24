import React, { useState, useEffect, useRef } from 'react';

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! 👋 Soy tu asistente de inteligencia artificial especializado en contabilidad y servicios financieros en Puerto Rico.\n\nPuedo ayudarte con:\n• Preguntas sobre impuestos federales y de Puerto Rico\n• Planillas, IVU, y patentes municipales\n• Contabilidad y finanzas\n• Información sobre nuestros servicios\n\n¿En qué puedo asistirte hoy?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [error, setError] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setError(false);

    try {
      // Call your backend API endpoint
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages,
          userMessage: inputValue
        })
      });

      const data = await response.json();
      
      const assistantMessage = {
        role: 'assistant',
        content: data.response,
        showBooking: data.showBooking,
        showContact: data.showContact
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      
      if (data.error) {
        setError(true);
      }
    } catch (error) {
      console.error('Error calling AI:', error);
      setError(true);
      
      const errorMessage = {
        role: 'assistant',
        content: 'Disculpa, estoy teniendo problemas técnicos. Por favor intenta de nuevo o contacta directamente al +1 (939) 608-3732.',
        showContact: true
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const navigateToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const quickQuestions = [
    '¿Cuándo vence la planilla?',
    '¿Qué documentos necesito?',
    '¿Cómo puedo ahorrar en impuestos?',
    'Necesito ayuda con IVU'
  ];

  const handleQuickQuestion = (question) => {
    setInputValue(question);
    setTimeout(() => handleSubmit(), 100);
  };

  return (
    <>
      {/* Chat Button with pulse animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #C9A961, #B8935A)',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(201, 169, 97, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: 'all 0.3s ease',
        }}
      >
        {isOpen ? (
          <span style={{ color: 'white', fontSize: '28px' }}>✕</span>
        ) : (
          <div style={{ position: 'relative' }}>
            <span style={{ color: 'white', fontSize: '32px' }}>🤖</span>
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#4caf50',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '2px solid white',
              animation: 'pulse 2s infinite'
            }}></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '95px',
          right: '20px',
          width: '440px',
          height: '620px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 998,
          animation: 'slideUp 0.3s ease',
          border: '1px solid rgba(114, 47, 55, 0.1)',
        }}>
          {/* Header */}
          <div style={{
            padding: '20px',
            background: 'linear-gradient(135deg, #252F3E, #2A3847)',
            borderRadius: '20px 20px 0 0',
            color: 'white',
            borderBottom: '3px solid #C9A961',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>🤖</span>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>
                  Asistente AI de Contabilidad
                </h3>
                <p style={{ margin: '2px 0 0 0', fontSize: '11px', opacity: 0.9, fontWeight: 600, }}>
                  Powered by Llama 3.3 AI • Respuestas inteligentes 24/7
                </p>
              </div>
            </div>
          </div>

          {/* Quick Questions (shown when no conversation) */}
          {messages.length === 1 && (
            <div style={{
              padding: '15px',
              background: '#f8f8f8',
              borderBottom: '1px solid #eee',
            }}>
              <p style={{ fontSize: '12px', color: '#666', marginBottom: '10px' }}>
                Preguntas frecuentes:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    style={{
                      padding: '6px 12px',
                      background: '#1A2332',
                      border: '1px solid #C9A961',
                      borderRadius: '15px',
                      fontSize: '11px',
                      color: '#C9A961',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#C9A961';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#1A2332';
                      e.currentTarget.style.color = '#C9A961';
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            background: '#1A2332',
          }}>
            {messages.map((msg, index) => (
              <div key={index}>
                <div style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}>
                  {msg.role === 'assistant' && (
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #C9A961, #B8935A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      flexShrink: 0,
                    }}>
                      🤖
                    </div>
                  )}
                  <div style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: msg.role === 'user' 
                      ? '18px 18px 4px 18px' 
                      : '18px 18px 18px 4px',
                    background: msg.role === 'user' 
                      ? 'linear-gradient(135deg, #C9A961, #B8935A)'
                      : '#252F3E',
                    color: msg.role === 'user' ? 'white' : '#FFFFFF',
                    fontSize: '14px',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line',
                    boxShadow: msg.role === 'assistant' 
                      ? '0 2px 8px rgba(0,0,0,0.3)' 
                      : '0 2px 8px rgba(201, 169, 97, 0.3)',
                    border: msg.role === 'assistant' ? '1px solid rgba(201, 169, 97, 0.2)' : 'none',
                  }}>
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#2A3847',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      flexShrink: 0,
                    }}>
                      👤
                    </div>
                  )}
                </div>
                
                {/* Action Buttons */}
                {(msg.showBooking || msg.showContact) && (
                  <div style={{ 
                    marginTop: '10px',
                    marginLeft: msg.role === 'assistant' ? '36px' : 'auto',
                    marginRight: msg.role === 'user' ? '36px' : 'auto',
                    display: 'flex', 
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}>
                    {msg.showBooking && (
                      <button
                        onClick={() => navigateToSection('booking')}
                        style={{
                          padding: '8px 14px',
                          background: 'linear-gradient(135deg, #C9A961, #B8935A)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          transition: 'transform 0.2s',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        📅 Programar Cita
                      </button>
                    )}
                    {msg.showContact && (
                      <button
                        onClick={() => navigateToSection('contact')}
                        style={{
                          padding: '8px 14px',
                          background: '#1A2332',
                          color: '#6fba2c',
                          border: '2px solid #6fba2c',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#6fba2c';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#1A2332';
                          e.currentTarget.style.color = '#6fba2c';
                        }}
                      >
                        📞 Contactar Ahora
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px'
              }}>
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #C9A961, #B8935A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}>
                  🤖
                </div>
                <div style={{
                  padding: '12px 16px',
                  background: '#252F3E',
                  borderRadius: '18px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(201, 169, 97, 0.2)',
                }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0s', color: '#C9A961' }}>●</span>
                    <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0.2s', color: '#C9A961' }}>●</span>
                    <span style={{ animation: 'bounce 1.4s infinite', animationDelay: '0.4s', color: '#C9A961' }}>●</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{
            padding: '20px',
            borderTop: '1px solid rgba(201, 169, 97, 0.2)',
            background: '#252F3E',
            borderRadius: '0 0 20px 20px',
          }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pregunta sobre impuestos, IVU, planillas..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  border: '2px solid rgba(201, 169, 97, 0.3)',
                  borderRadius: '25px',
                  outline: 'none',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  opacity: isLoading ? 0.6 : 1,
                  background: '#1A2332',
                  color: '#FFFFFF',
                }}
                onFocus={(e) => e.target.style.borderColor = '#C9A961'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(201, 169, 97, 0.3)'}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !inputValue.trim()}
                style={{
                  padding: '12px 24px',
                  background: isLoading || !inputValue.trim()
                    ? '#2A3847' 
                    : 'linear-gradient(135deg, #C9A961, #B8935A)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: isLoading || !inputValue.trim() ? 'not-allowed' : 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                {isLoading ? '...' : '➤'}
              </button>
            </div>
            <p style={{
              marginTop: '8px',
              fontSize: '10px',
              color: '#999',
              textAlign: 'center'
            }}>
              🔒 Conversación segura • Powered by Llama 3.3 AI
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
          }
        }
        
        @media (max-width: 480px) {
          div[style*="width: 440px"] {
            width: calc(100vw - 40px) !important;
            right: 20px !important;
            height: calc(100vh - 120px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default AIChatAssistant;
