import React from 'react';
import { Shield, Award, Lock, CheckCircle, MapPin, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export function TrustIndicators() {
  const indicators = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "CPD Certified",
      subtitle: "BCCA Diploma"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Asigurat & Licențiat",
      subtitle: "Protecție completă"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Servicii în Brașov",
      subtitle: "Acoperire 30km"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "Garanție 100%",
      subtitle: "Satisfacție garantată"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {indicators.map((indicator, index) => (
        <div 
          key={index}
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-[#00245E]">
            {indicator.icon}
          </div>
          <div>
            <div className="font-semibold text-sm text-gray-800">{indicator.title}</div>
            <div className="text-xs text-gray-600">{indicator.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function CompanyStats() {
  const stats = [
    { number: "Brașov", label: "Zona Principală", icon: <MapPin className="w-6 h-6" /> },
    { number: "BCCA", label: "Certificat Internațional", icon: <Award className="w-6 h-6" /> },
    { number: "24h", label: "Răspuns Rapid", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100%", label: "Garanție", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-[#e6f3ff] rounded-full text-[#00245E] group-hover:bg-[#00245E] group-hover:text-white transition-colors">
              {stat.icon}
            </div>
          </div>
          <div className="text-2xl font-bold text-[#00245E] mb-1">{stat.number}</div>
          <div className="text-sm text-muted-foreground">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}