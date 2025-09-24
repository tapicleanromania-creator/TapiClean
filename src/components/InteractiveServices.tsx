import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import carInteriorImage from 'figma:asset/f3070bbe5ccd7ab3e305e675c8dca94da88af172.png';
import { 
  Sofa, 
  Bed, 
  Car, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  CheckCircle, 
  Sparkles,
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  Phone,
  MessageCircle,
  DollarSign,
  Tag
} from 'lucide-react';

interface ServiceDetail {
  name: string;
  description: string;
  duration: string;
  price: string;
}

interface ServiceCategory {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  popular?: boolean;
  startingPrice: string;
  details: ServiceDetail[];
  features: string[];
  process: string[];
  savings?: string;
}

export function InteractiveServices() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const serviceCategories: ServiceCategory[] = [
    {
      id: 'sofas',
      icon: <Sofa className="w-10 h-10" />,
      title: 'Canapele, Fotolii & Scaune',
      subtitle: 'Cel mai popular serviciu',
      description: 'Curățare profesională pentru toate tipurile de canapele, fotolii și mobilier tapițat din locuința ta.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop&q=80',
      popular: true,
      startingPrice: '80',
      savings: 'Economisești 20%',
      details: [
        {
          name: 'Canapele din Piele',
          description: 'Curățare specializată cu produse pentru piele naturală',
          duration: '45-60 min',
          price: 'de la 150 RON'
        },
        {
          name: 'Canapele din Material',
          description: 'Curățare în profunzime pentru toate tipurile de țesături',
          duration: '60-90 min',
          price: 'de la 120 RON'
        },
        {
          name: 'Fotolii & Scaune',
          description: 'Curățare detaliată pentru fotolii și scaune tapițate',
          duration: '30-45 min',
          price: 'de la 80 RON'
        },
        {
          name: 'Canapele Colțar',
          description: 'Serviciu specializat pentru canapele mari modulare',
          duration: '90-120 min',
          price: 'de la 200 RON'
        }
      ],
      features: [
        'Eliminarea petelor și mirosurilor',
        'Dezinfectare completă',
        'Protecție împotriva petelor viitoare',
        'Uscare rapidă (2-4 ore)',
        'Produse și echipamente de înaltă calitate',
        'Garanție 30 zile'
      ],
      process: [
        'Inspecție și evaluare gratuită',
        'Pre-tratarea petelor persistente',
        'Curățare în profunzime cu echipamente profesionale',
        'Aplicarea protecției finale',
        'Verificare finală și sfaturi de îngrijire'
      ]
    },
    {
      id: 'mattresses',
      icon: <Bed className="w-10 h-10" />,
      title: 'Saltele & Pat',
      subtitle: 'Pentru un somn sănătos',
      description: 'Curățare în profunzime pentru saltele, elimină alergenii, acarieni și bacteriile pentru un somn odihnitor.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop&q=80',
      startingPrice: '100',
      details: [
        {
          name: 'Saltele Matrimoniale',
          description: 'Curățare completă și dezinfectare pentru saltele mari',
          duration: '60-75 min',
          price: 'de la 180 RON / 1 față'
        },
        {
          name: 'Saltele Simple',
          description: 'Serviciu specializat pentru saltele individuale',
          duration: '45-60 min',
          price: 'de la 120 RON / 1 față'
        },
        {
          name: 'Saltele Copii',
          description: 'Curățare delicată cu produse sigure pentru copii',
          duration: '30-45 min',
          price: 'de la 100 RON / 1 față'
        },
        {
          name: 'Tablie Tapițată',
          description: 'Curățare pentru tablii de pat și ramuri tapițate',
          duration: '30-40 min',
          price: 'de la 70 RON'
        }
      ],
      features: [
        'Eliminarea acarienilor și bacteriilor',
        'Îndepărtarea petelor de transpirație',
        'Dezodorizare naturală',
        'Uscare completă în 4-6 ore',
        'Produse hipoalergenice',
        'Îmbunătățirea calității somnului'
      ],
      process: [
        'Evaluarea stării saltelei',
        'Aspirare profesională pe ambele părți',
        'Tratament anti-acarieni',
        'Curățare cu echipamente specializate',
        'Dezinfectare și protecție finală'
      ]
    },
    {
      id: 'auto',
      icon: <Car className="w-10 h-10" />,
      title: 'Interior Auto',
      subtitle: 'Mașina ca nouă',
      description: 'Servicii complete de curățenie pentru interiorul mașinii: scaune, plafon, portiere și covorașe.',
      image: carInteriorImage,
      startingPrice: '180',
      details: [
        {
          name: 'Scaune Auto Piele',
          description: 'Curățare și îngrijire specializată pentru scaunele din piele',
          duration: '60-90 min',
          price: 'de la 200 RON'
        },
        {
          name: 'Scaune Auto Material',
          description: 'Curățare în profunzime pentru scaune din material textil',
          duration: '75-105 min',
          price: 'de la 180 RON'
        },
        {
          name: 'Pachet Complet',
          description: 'Scaune + portiere + covorașe',
          duration: '2-3 ore',
          price: 'de la 350 RON'
        }
      ],
      features: [
        'Eliminarea mirosurilor persistente',
        'Curățarea petelor de cafea, alimente',
        'Îngrijirea și protejarea pielea',
        'Aspirare profesională',
        'Dezinfectare antibacteriană',
        'Restaurarea aspectului original'
      ],
      process: [
        'Inspecția interiorului mașinii',
        'Demontarea covorașelor pentru curățare separată',
        'Aspirare detaliată a tuturor suprafețelor',
        'Curățare specializată pe tipul de material',
        'Montarea și verificarea finală'
      ]
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#f8faff] to-[#f1f8ff] relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden bg-[rgba(255,255,255,1)]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#00B5FC]/15 to-[#00245E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#00245E]/15 to-[#00B5FC]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#00B5FC]/5 to-[#00245E]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#00B5FC]/20 rounded-full px-8 py-4 mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-[#00245E]" />
            <span className="text-[#00245E] font-semibold text-lg">Serviciile Noastre</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Alege Categoria
            <span className="text-brand-gradient"> Potrivită</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Servicii profesionale de curățenie cu prețuri transparente și rezultate garantate. 
            <strong className="text-[#00245E]"> Începând de la doar 80 RON.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <Card 
              key={category.id}
              className={`group cursor-pointer transition-all duration-700 border-0 overflow-hidden relative ${
                expandedCategory === category.id 
                  ? 'lg:col-span-3 transform scale-[1.01] shadow-2xl ring-2 ring-[#00B5FC]/30' 
                  : hoveredCategory === category.id 
                    ? 'transform scale-105 shadow-2xl z-10' 
                    : 'shadow-lg hover:shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
              onClick={() => toggleCategory(category.id)}
            >
              {/* Enhanced glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/80 backdrop-blur-xl"></div>
              
              {/* Animated border gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B5FC]/20 via-[#00245E]/20 to-[#00B5FC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              
              <CardContent className="p-0 relative z-10">
                <div className={`transition-all duration-700 ${expandedCategory === category.id ? 'lg:flex lg:items-start' : ''}`}>
                  {/* Enhanced Image Section */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image}
                      alt={category.title}
                      className={`w-full object-cover transition-all duration-700 ${
                        expandedCategory === category.id ? 'lg:w-96 h-64' : 'h-64 group-hover:scale-110'
                      }`}
                    />
                    
                    {/* Enhanced overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Popular badge */}
                    <div className="absolute top-6 left-6">
                      {category.popular && (
                        <div className="flex items-center gap-3">
                          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg animate-pulse px-4 py-2">
                            <Star className="w-4 h-4 mr-2" />
                            Cel Mai Popular
                          </Badge>
                          {category.savings && (
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 shadow-lg px-4 py-2">
                              <TrendingUp className="w-4 h-4 mr-2" />
                              {category.savings}
                            </Badge>
                          )}
                        </div>
                      )}
                    </div>
                    
                    {/* Category info overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:bg-white/30 transition-colors shadow-lg">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                          <p className="text-sm opacity-90 font-medium">{category.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Content Section */}
                  <div className={`p-8 flex-1 ${expandedCategory === category.id ? 'lg:p-10' : ''}`}>
                    <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                      {category.description}
                    </p>

                    {/* Quick Features */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {category.features.slice(0, 3).map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex} 
                          variant="secondary" 
                          className="text-sm bg-gradient-to-r from-[#e6f3ff] to-[#cce7ff] text-[#00245E] border border-[#00B5FC]/30 hover:from-[#cce7ff] hover:to-[#b3e0ff] transition-colors px-4 py-2"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Enhanced CTA section */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#e6f3ff] to-[#cce7ff] rounded-2xl border border-[#00B5FC]/30 shadow-md">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-md">
                            <Tag className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-gray-800 text-lg">Începe de la {category.startingPrice} RON</div>
                            <div className="text-sm text-gray-600">Preț final după evaluare gratuită</div>
                          </div>
                        </div>
                        <Zap className="w-8 h-8 text-yellow-500" />
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-[#e6f3ff] group-hover:to-[#cce7ff] group-hover:border-[#00B5FC] transition-all duration-300 h-14 text-base font-semibold border-2 border-[#00245E]/20 hover:border-[#00B5FC]"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCategory(category.id);
                        }}
                      >
                        {expandedCategory === category.id ? (
                          <>
                            <ChevronUp className="w-6 h-6 mr-3" />
                            Închide Detaliile
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-6 h-6 mr-3" />
                            Vezi Toate Prețurile
                            <ChevronDown className="w-6 h-6 ml-3" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Enhanced Expanded Details */}
                {expandedCategory === category.id && (
                  <div className="border-t border-gradient-to-r from-[#00B5FC]/30 to-[#00245E]/30 bg-gradient-to-br from-[#f8faff] via-white/90 to-[#f1f8ff] backdrop-blur-sm p-8 lg:p-10 animate-in slide-in-from-top-4 duration-700">
                    
                    {/* Header with category info */}
                    <div className="text-center mb-10">
                      <h3 className="text-3xl font-bold text-gray-800 mb-3">
                        Detalii Complete - {category.title}
                      </h3>
                      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Toate serviciile, prețurile și informațiile de care ai nevoie pentru a lua cea mai bună decizie.
                      </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-10 mb-10">
                      {/* Left Column - Services & Pricing */}
                      <div className="space-y-8">
                        {/* Services & Pricing */}
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-md">
                              <Tag className="w-6 h-6 text-white" />
                            </div>
                            Servicii & Prețuri
                          </h4>
                          <div className="grid gap-4">
                            {category.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-[#00B5FC]/30">
                                <div className="flex justify-between items-start mb-3">
                                  <h5 className="font-bold text-gray-800 text-lg">{detail.name}</h5>
                                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-sm font-bold whitespace-nowrap px-3 py-1 shadow-md">
                                    {detail.price}
                                  </Badge>
                                </div>
                                <p className="text-gray-600 mb-3 leading-relaxed">{detail.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Clock className="w-4 h-4" />
                                  <span>{detail.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Process Steps */}
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-md">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            Procesul Nostru
                          </h4>
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-md">
                            <ol className="space-y-4">
                              {category.process.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start gap-4">
                                  <div className="w-8 h-8 bg-brand-gradient text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1 shadow-md">
                                    {stepIndex + 1}
                                  </div>
                                  <span className="text-gray-700 leading-relaxed text-lg">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Features & Benefits */}
                      <div className="space-y-8">
                        {/* Features */}
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-r from-[#00B5FC] to-[#00245E] rounded-full shadow-md">
                              <CheckCircle className="w-6 h-6 text-white" />
                            </div>
                            Ce Includem
                          </h4>
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-md">
                            <ul className="grid grid-cols-1 gap-4">
                              {category.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3">
                                  <div className="p-2 bg-green-100 rounded-full flex-shrink-0 mt-1">
                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                  </div>
                                  <span className="text-gray-700 leading-relaxed text-lg">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Why Choose Us */}
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full shadow-md">
                              <Star className="w-6 h-6 text-white" />
                            </div>
                            De Ce Să Ne Alegi
                          </h4>
                          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 space-y-4 shadow-md">
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                              <div className="p-3 bg-green-100 rounded-full">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-800">Garanție 100%</div>
                                <div className="text-sm text-gray-600">Satisfacție garantată sau îți returnăm banii</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                              <div className="p-3 bg-blue-100 rounded-full">
                                <Clock className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-800">Răspuns Rapid</div>
                                <div className="text-sm text-gray-600">Evaluare gratuită în maxim 2 ore</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl border border-purple-200">
                              <div className="p-3 bg-purple-100 rounded-full">
                                <Star className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <div className="font-semibold text-gray-800">Certificat BCCA</div>
                                <div className="text-sm text-gray-600">Standarde internaționale de calitate</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced CTA Section */}
                    <div className="bg-brand-gradient rounded-3xl p-8 text-white text-center relative overflow-hidden shadow-2xl">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-4 left-4 w-12 h-12 border-2 border-white rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white rounded-full"></div>
                        <div className="absolute top-1/2 right-8 w-6 h-6 border-2 border-white rounded-full"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <h5 className="text-2xl font-bold mb-4">
                          Gata să începi cu {category.title.toLowerCase()}?
                        </h5>
                        <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                          <strong className="text-white">Plătești doar după ce ești 100% mulțumit!</strong> Evaluare gratuită în maxim 2 ore.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button 
                            size="lg"
                            className="bg-white text-[#00245E] hover:bg-blue-50 shadow-xl hover:shadow-2xl transition-all font-bold px-8 py-4 text-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                          >
                            <Sparkles className="w-5 h-5 mr-2" />
                            Evaluare Gratuită
                          </Button>
                          <Button 
                            size="lg"
                            variant="outline"
                            className="border-2 border-white text-[rgba(0,0,0,1)] hover:bg-white hover:text-[#00245E] font-bold px-8 py-4 text-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open('tel:+40744112555');
                            }}
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            0744 112 555
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#00B5FC]/20 to-[#00245E]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#00245E]/20 to-[#00B5FC]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e6f3ff] to-[#cce7ff] rounded-full px-8 py-4 mb-8 shadow-md">
                <Sparkles className="w-6 h-6 text-[#00245E]" />
                <span className="text-[#00245E] font-semibold text-lg">Consultație Expertă</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Nu știi ce serviciu să alegi?
              </h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Vorbește cu specialiștii noștri pentru o consultație gratuită și o recomandare personalizată.
                <br />
                <strong className="text-[#00245E]">Garantăm cel mai bun preț din Brașov!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 shadow-xl hover:shadow-2xl transition-all font-bold text-lg px-12 py-5"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Consultație Gratuită
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#00245E] text-[#00245E] hover:bg-[#e6f3ff] font-bold text-lg px-12 py-5"
                  onClick={() => window.open('https://wa.me/40744112555')}
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  WhatsApp: 0744 112 555
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
