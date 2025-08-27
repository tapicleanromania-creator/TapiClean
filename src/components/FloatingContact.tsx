import React, { useState } from 'react';
import { Phone, MessageCircle, X, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Sună Acum",
      action: () => window.open('tel:+40744112555'),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      action: () => window.open('https://wa.me/40744112555'),
      color: "bg-emerald-500 hover:bg-emerald-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      color: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-2 duration-200">
          {contactOptions.map((option, index) => (
            <button
              key={index}
              onClick={option.action}
              className={`${option.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 pr-4 group`}
            >
              {option.icon}
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity text-[rgba(255,255,255,1)] text-[12px] font-[Inter]">
                {option.label}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 relative group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <Phone className="w-6 h-6" />
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
          </>
        )}
      </button>
    </div>
  );
}