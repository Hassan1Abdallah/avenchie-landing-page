'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'customer';
  text: string;
  displayedText?: string;
}

interface Scenario {
  title: string;
  messages: {
    type: 'bot' | 'customer';
    text: string;
  }[];
}

const scenarios: Scenario[] = [
  {
    title: 'Website Development',
    messages: [
      { type: 'bot', text: 'مرحبًا 👋\nأهلًا بك في Autoagen.\nكيف يمكنني مساعدتك اليوم؟' },
      { type: 'customer', text: 'أحتاج موقع إلكتروني لشركة عقارات.' },
      { type: 'bot', text: 'ممتاز.\nهل لديك هوية بصرية أو لوجو حالي؟' },
      { type: 'customer', text: 'نعم' },
      { type: 'bot', text: 'هل الموقع سيكون باللغة العربية فقط أم عربي وإنجليزي؟' },
      { type: 'customer', text: 'اللغتين' },
      { type: 'bot', text: 'من فضلك اكتب اسمك ورقم هاتفك\nوسيتواصل معك أحد المختصين.' },
    ],
  },
  {
    title: 'CRM System',
    messages: [
      { type: 'bot', text: 'مرحبًا 👋\nكيف يمكنني مساعدتك؟' },
      { type: 'customer', text: 'أحتاج نظام CRM لإدارة فريق المبيعات.' },
      { type: 'bot', text: 'كم عدد موظفي المبيعات لديك؟' },
      { type: 'customer', text: '15 موظف.' },
      { type: 'bot', text: 'هل لديكم نظام حالي أم سيتم إنشاء نظام جديد؟' },
      { type: 'customer', text: 'سيتم إنشاء نظام جديد.' },
      { type: 'bot', text: 'من فضلك اترك بيانات التواصل الخاصة بك.' },
    ],
  },
  {
    title: 'Automation',
    messages: [
      { type: 'bot', text: 'Hello 👋\nWelcome to Autoagen.\nHow can I help you today?' },
      { type: 'customer', text: 'I want to automate customer support.' },
      { type: 'bot', text: 'Great!\nDo you currently use WhatsApp Business?' },
      { type: 'customer', text: 'Yes' },
      { type: 'bot', text: 'Would you like AI to answer customer questions automatically?' },
      { type: 'customer', text: 'Yes' },
      { type: 'bot', text: 'Please enter your name and phone number.' },
    ],
  },
];

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex items-center gap-1"
  >
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 0.6,
          delay: i * 0.1,
          repeat: Infinity,
        }}
        className="w-2 h-2 bg-gray-400 rounded-full"
      />
    ))}
  </motion.div>
);

const TypewriterMessage = ({
  text,
  onComplete,
}: {
  text: string;
  onComplete: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 20);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return <>{displayedText}</>;
};

export function DemoChatSection() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [typingUser, setTypingUser] = useState<'bot' | 'customer' | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const currentScenario = scenarios[scenarioIndex];
  
  // Auto-scroll to bottom
  // useEffect(() => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [messages]);

  // Auto-scroll inside chat only
  useEffect(() => {
      if (!chatContainerRef.current) return;

      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
  }, [messages, isTyping]);

  // Message display logic
  useEffect(() => {
        if (messageIndex >= currentScenario.messages.length) {
          if (!showForm && !showSuccess) {
            const timer = setTimeout(() => {
              setShowForm(true);
              setOrderNumber(
                Math.floor(1000 + Math.random() * 9000).toString()
              );
            }, 700);

            return () => clearTimeout(timer);
          }

          return;
        }

        const currentMessage = currentScenario.messages[messageIndex];

        const timer = setTimeout(() => {
          setTypingUser(currentMessage.type);
          setIsTyping(true);

          const typingDuration =
            currentMessage.type === 'bot' ? 900 : 450;

          const typingTimer = setTimeout(() => {
            const messageId = `${scenarioIndex}-${messageIndex}`;

            setMessages((prev) => [
              ...prev,
              {
                id: messageId,
                type: currentMessage.type,
                text: currentMessage.text,
                displayedText: '',
              },
            ]);

            setTypingUser(null);
            setIsTyping(false);

            let charIndex = 0;

            const typeInterval = setInterval(() => {
              charIndex++;

              setMessages((prev) =>
                prev.map((msg) =>
                  msg.id === messageId
                    ? {
                        ...msg,
                        displayedText: currentMessage.text.slice(0, charIndex),
                      }
                    : msg
                )
              );

              if (charIndex >= currentMessage.text.length) {
                clearInterval(typeInterval);

                setTimeout(() => {
                  setMessageIndex((prev) => prev + 1);
                }, 300);
              }
            }, 18); 
          }, typingDuration);

          return () => clearTimeout(typingTimer);
        }, 600);

        return () => clearTimeout(timer);
      }, [
        messageIndex,
        currentScenario,
        showForm,
        showSuccess,
        scenarioIndex,
      ]);

  // Form submission logic
  useEffect(() => {
    if (showForm && !showSuccess) {
      const formTimer = setTimeout(() => {
        setShowForm(false);
        setShowSuccess(true);

        const successTimer = setTimeout(() => {
          setShowSuccess(false);
          setMessages([]);
          setMessageIndex(0);
          setTypingUser(null);
          setIsTyping(false);
          setScenarioIndex((prev) => (prev + 1) % scenarios.length);
        }, 3000);

        return () => clearTimeout(successTimer);
      }, 1000);

      return () => clearTimeout(formTimer);
    }
  }, [showForm, showSuccess]);

  return (
    <section id="DemoChatSection" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-secondary">Interactive Demo</span>
          </motion.div>

         <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-4 text-balance">
          ليست مجرد محادثة... بل نظام يعمل نيابة عنك
        </h2>

<p className="text-lg text-gray-600 max-w-1xl mx-auto leading-8">
  هذا العرض التفاعلي يمثل جزءاً من حلولنا المتكاملة التي تشمل أتمتة العمليات، إدارة العملاء (CRM)، وتطوير المواقع.
</p>
        </motion.div>

        {/* Chat Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            {/* Chat Header */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-orange to-brand-tangerine rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Autoagen AI Assistant</p>
                  <p className="text-xs text-gray-500">{currentScenario.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-medium text-gray-600">Online</span>
              </div>
            </motion.div>

            {/* Messages Container */}
            <div ref={chatContainerRef} className="h-96 overflow-x-hidden overflow-y-auto px-6 py-6 flex flex-col gap-4 bg-white">
              <AnimatePresence  mode="popLayout" >
                {messages.map((message, idx) => (
                  <motion.div
                    key={message.id}
                    layout={false}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className={`flex ${
                      message.type === 'bot' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`flex gap-2 max-w-xs ${
                        message.type === 'bot' ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                          message.type === 'bot'
                            ? 'bg-gradient-to-br from-brand-orange to-brand-tangerine text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {message.type === 'bot' ? 'AI' : 'You'}
                      </div>
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.type === 'bot'
                            ? 'bg-gray-100 text-gray-900'
                            : 'bg-primary text-white'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-wrap break-words">
                          {message.displayedText}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity:0 }}
animate={{ opacity:1 }}
exit={{ opacity:0 }}
                    className={`flex ${
                      typingUser === 'bot' ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div
                      className={`flex gap-2 ${
                        typingUser === 'bot' ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                          typingUser === 'bot'
                            ? 'bg-gradient-to-br from-brand-orange to-brand-tangerine text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {typingUser === 'bot' ? 'AI' : 'You'}
                      </div>

                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          typingUser === 'bot'
                            ? 'bg-gray-100'
                            : 'bg-primary'
                        }`}
                      >
                        <TypingIndicator />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div />
            </div>

            {/* Form */}
            <AnimatePresence>
              {showForm && !showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-6 border-t border-gray-100 bg-gray-50 space-y-4"
                >
                  <input
                    type="text"
                    defaultValue="Ahmed Mohamed"
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm disabled:opacity-60"
                  />
                  <input
                    type="tel"
                    defaultValue="01012345678"
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-900 text-sm disabled:opacity-60"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    Send Request
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Card */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-8 border-t border-gray-100 bg-gradient-to-br from-primary/10 to-brand-silver/40 flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="mb-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Request Sent Successfully
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Our team will contact you shortly.
                  </p>
                  <p className="text-xs font-mono text-gray-500">Order #{orderNumber}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
