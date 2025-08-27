import image_ee1019f0bcea2a1192028fabb176167bcd1b6581 from 'figma:asset/ee1019f0bcea2a1192028fabb176167bcd1b6581.png';
import image_e27dca3a368c5def858d0991fca7c129f170aa3a from 'figma:asset/e27dca3a368c5def858d0991fca7c129f170aa3a.png';
/*
  EmailJS Setup Instructions for TapiClean Contact Form:
  
  1. Create an EmailJS account at https://www.emailjs.com/
  2. Create a new email service (Gmail recommended)
  3. Create an email template with these variables:
     - {{to_name}} - Recipient name (Artur Bețcu)
     - {{to_email}} - Recipient email (tapiclean.romania@gmail.com)
     - {{from_name}} - Sender name
     - {{from_email}} - Sender email
     - {{phone}} - Phone number
     - {{location}} - Location
     - {{message}} - Message content
     - {{formatted_message}} - Pre-formatted message
  4. Replace the following placeholders in the code:
     - YOUR_EMAILJS_SERVICE_ID - Your EmailJS service ID
     - YOUR_EMAILJS_TEMPLATE_ID - Your EmailJS template ID  
     - YOUR_EMAILJS_USER_ID - Your EmailJS user ID
     - YOUR_FORMSPREE_ID - (Optional) Formspree form ID as fallback
  
  Alternative: Use Formspree (https://formspree.io/) for simpler setup
*/

import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Badge } from "./components/ui/badge";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { TapiCleanLogo } from "./components/TapiCleanLogo";
import {
  TrustIndicators,
  CompanyStats,
} from "./components/TrustIndicators";
import { FloatingContact } from "./components/FloatingContact";
import { InteractiveServices } from "./components/InteractiveServices";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { toast } from "sonner@2.0.3";
import { Toaster } from "./components/ui/sonner";
import ownerImage from "figma:asset/6ec0392b281360fada8d110af4c16d05ce149d14.png";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Clock,
  Shield,
  Users,
  Award,
  Send,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ThumbsUp,
  Heart,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>(
    {},
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Load EmailJS script
  useEffect(() => {
    const loadEmailJS = () => {
      if (!(window as any).emailjs) {
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
        script.async = true;
        script.onload = () => {
          // Initialize EmailJS with your user ID
          (window as any).emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your actual user ID
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Numele este obligatoriu";
    } else if (formData.name.trim().length < 2) {
      newErrors.name =
        "Numele trebuie să aibă cel puțin 2 caractere";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Adresa de email nu este validă";
    }

    if (
      formData.phone.trim() &&
      !/^[\d\s\+\-\(\)]+$/.test(formData.phone)
    ) {
      newErrors.phone = "Numărul de telefon nu este valid";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send email using EmailJS service
  const sendEmail = async (formData: any) => {
    // EmailJS configuration - replace with your actual EmailJS credentials
    const emailjsConfig = {
      serviceId: "YOUR_EMAILJS_SERVICE_ID", // Replace with your EmailJS service ID
      templateId: "YOUR_EMAILJS_TEMPLATE_ID", // Replace with your EmailJS template ID
      userId: "YOUR_EMAILJS_USER_ID", // Replace with your EmailJS user ID
    };

    const emailData = {
      to_name: "Artur Bețcu",
      to_email: "tapiclean.romania@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "Nu a fost specificat",
      location: formData.service || "Nu a fost specificată",
      message: formData.message || "Nu a fost specificat mesaj",
      subject: `Solicitare curățenie tapițerie - ${formData.name}`,
      reply_to: formData.email,
      // Additional template variables
      service_type: "Curățenie Tapițerie",
      timestamp: new Date().toLocaleString("ro-RO"),
      formatted_message: `
Nume: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || "Nu a fost specificat"}
Locația: ${formData.service || "Nu a fost specificată"}

Mesaj:
${formData.message || "Nu a fost specificat mesaj"}

Trimis la: ${new Date().toLocaleString("ro-RO")}
      `.trim(),
    };

    try {
      // Using EmailJS to send the email
      const emailjs = (window as any).emailjs;

      if (!emailjs) {
        throw new Error(
          "EmailJS nu este încărcat. Verificați conexiunea la internet.",
        );
      }

      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        emailData,
        emailjsConfig.userId,
      );

      if (response.status === 200) {
        return Promise.resolve(response);
      } else {
        throw new Error("Eroare la trimiterea email-ului");
      }
    } catch (error) {
      // Fallback: Try using a form submission service like Formspree
      try {
        const formspreeResponse = await fetch(
          "https://formspree.io/f/YOUR_FORMSPREE_ID",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              location: formData.service,
              message: formData.message,
              subject: `Solicitare TapiClean - ${formData.name}`,
            }),
          },
        );

        if (formspreeResponse.ok) {
          return Promise.resolve(formspreeResponse);
        } else {
          throw new Error("Eroare la trimiterea formularului");
        }
      } catch (fallbackError) {
        // Final fallback: mailto link with pre-filled data
        const mailtoBody = encodeURIComponent(
          `
Solicitare curățenie tapițerie

Nume: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || "Nu a fost specificat"}
Locația: ${formData.service || "Nu a fost specificată"}

Mesaj:
${formData.message || "Nu a fost specificat mesaj"}
        `.trim(),
        );

        const mailtoSubject = encodeURIComponent(
          `Solicitare curățenie tapițerie - ${formData.name}`,
        );
        const mailtoLink = `mailto:tapiclean.romania@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Open email client
        window.location.href = mailtoLink;

        return Promise.resolve({ method: "mailto" });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset previous status
    setSubmitStatus("idle");
    setErrors({});

    // Validate form
    if (!validateForm()) {
      toast.error("Te rugăm să corectezi erorile din formular");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      toast.success("Solicitarea a fost trimisă cu succes!", {
        duration: 5000,
        description:
          "Vă vom contacta în maxim 24 de ore la adresa de email sau telefon specificată.",
      });

      // Scroll to top to show success message
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 1000);
    } catch (error) {
      setSubmitStatus("error");
      toast.error(
        "A apărut o eroare la trimiterea formularului. Vă rugăm să încercați din nou sau să ne contactați direct la telefon.",
        {
          duration: 6000,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigation = [
    { name: "Acasă", href: "#hero" },
    { name: "Servicii", href: "#services" },
    { name: "Rezultate", href: "#results" },
    { name: "Despre Noi", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <TapiCleanLogo size="custom" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(item.href)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+40744112555"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">
                  0744 112 555
                </span>
              </a>
              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="shadow-md hover:shadow-lg transition-shadow bg-brand-gradient hover:opacity-90"
              >
                Ofertă Gratuită
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary transition-colors font-medium py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-gray-200">
                  <Button
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-brand-gradient hover:opacity-90"
                  >
                    Ofertă Gratuită
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative bg-gradient-to-br from-blue-50/50 via-white to-[#e6f3ff]/30 pt-24 pb-20 px-4 overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#00B5FC]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#00245E]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#00B5FC]/5 to-[#00245E]/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Badge className="bg-brand-gradient text-white border-0 shadow-md">
                    <MapPin className="w-4 h-4 mr-1" />
                    Curățenie Tapițerie Brașov
                  </Badge>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-[48px]">
                  <span className="text-brand-gradient">Curățare profesională tapițerie</span>
                  
                   în Brașov – canapele, saltele și tapițerie auto
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Servicii specializate de curățenie tapițerie
                  în zonă și împrejurimi. Canapele, fotolii,
                  saltele și scaune auto - toate curățate
                  profesional cu garanție completă și produse și
                  echipamente de înaltă calitate.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-lg px-16 py-6 bg-brand-gradient hover:opacity-90 shadow-lg hover:shadow-xl transition-all text-[16px] h-10 border-transparent no-underline"
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  Evaluare Gratuită
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-16 py-6 border-2 border-[#00245E] text-[#00245E] hover:bg-[#e6f3ff] shadow-md text-[16px] h-4"
                  onClick={() =>
                    window.open("tel:+40744112555")
                  }
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Sună: 0744 112 555
                </Button>
              </div>

              <CompanyStats />
            </div>

            <div className="relative">
              <div className="relative">
                <ImageWithFallback
                  src={image_ee1019f0bcea2a1192028fabb176167bcd1b6581}
                  alt="Curățenie tapițerie profesională în Brașov - TapiClean"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
                />

                {/* Floating trust card */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 z-20">
                  <div className="flex items-center gap-2 mb-2">
                    <ThumbsUp className="w-5 h-5 text-[#00B5FC]" />
                    <Heart className="w-5 h-5 text-red-500" />
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="font-bold text-gray-800">
                    Recomandat Local
                  </p>
                  <p className="text-sm text-gray-600">
                    De clienți mulțumiți din zonă
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-medium">
                      Certificat BCCA
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#00B5FC] to-[#00245E] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#00245E] to-[#00B5FC] rounded-full opacity-15 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section id="services">
        <InteractiveServices />
      </section>

      {/* Before/After Gallery Section */}
      <section id="results">
        <BeforeAfterGallery />
      </section>

      {/* About Owner Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={ownerImage}
                alt="Artur Bețcu - Proprietarul TapiClean, specialist în curățenie tapițerie Brașov"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />

              {/* Decorative badge */}
              <div className="absolute -top-6 -right-6 bg-brand-gradient text-white p-4 rounded-2xl shadow-xl">
                <Award className="w-8 h-8 mb-2" />
                <div className="text-sm font-bold">BCCA</div>
                <div className="text-xs opacity-90">
                  Certificat
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Badge className="bg-[#e6f3ff] text-[#00245E] border-[#00B5FC]/30">
                Despre Proprietar
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-800">
                Salut, sunt Artur
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Am înființat TapiClean pentru a aduce servicii
                  de{" "}
                  <strong className="text-brand-gradient">
                    curățenie tapițerie de calitate profesională
                  </strong>{" "}
                  direct în zonă și împrejurimi. Fiecare
                  canapea, fotoliu sau saltea pe care o curăț
                  este tratată cu aceeași grijă pe care o port
                  propriilor bunuri.
                </p>
                <p>
                  Sunt{" "}
                  <strong className="text-brand-gradient">
                    CPD certified cu Diploma BCCA
                  </strong>{" "}
                  (British Cleaning Certification Award), ceea
                  ce înseamnă că folosesc cele mai moderne
                  tehnici și standarde internaționale pentru
                  curățenia tapițeriei.
                </p>
                <p>
                  Misiunea mea este simplă: să transform
                  mobilierul tău tapițat și să-i redau aspectul
                  original, folosind doar produse și echipamente
                  de înaltă calitate. Când alegi TapiClean,
                  alegi{" "}
                  <strong className="text-brand-gradient">
                    garanția calității și profesionalismului
                  </strong>
                  .
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center gap-3 p-3 bg-[#e6f3ff] rounded-lg">
                  <Award className="w-6 h-6 text-[#00245E]" />
                  <div>
                    <div className="font-semibold text-gray-800">
                      CPD Certificat
                    </div>
                    <div className="text-sm text-gray-600">
                      BCCA Diploma
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-800">
                      Asigurat
                    </div>
                    <div className="text-sm text-gray-600">
                      & Licențiat
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-b from-[#e6f3ff]/30 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
              <MapPin className="w-4 h-4 mr-1" />
              Contactează-ne Local
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800">
              Curățenie Tapițerie în Brașov?
            </h2>
            <p className="text-xl text-gray-600">
              Obține o evaluare și ofertă gratuită pentru
              serviciul de curățenie tapițerie în zonă și
              împrejurimi. Răspundem în maxim 24 de ore!
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-800">
                        Solicitarea a fost trimisă cu succes!
                      </h3>
                      <p className="text-green-700 text-sm">
                        Vă vom contacta în maxim 24 de ore
                        pentru a programa evaluarea gratuită.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                    <div>
                      <h3 className="font-semibold text-red-800">
                        A apărut o eroare
                      </h3>
                      <p className="text-red-700 text-sm">
                        Vă rugăm să încercați din nou sau să ne
                        contactați direct la telefon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Nume Complet *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        });
                        if (errors.name)
                          setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Numele tău complet"
                      className={`border-gray-300 focus:border-[#00B5FC] focus:ring-[#00B5FC]/30 ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Adresă Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        });
                        if (errors.email)
                          setErrors({ ...errors, email: "" });
                      }}
                      placeholder="email@exemplu.ro"
                      className={`border-gray-300 focus:border-[#00B5FC] focus:ring-[#00B5FC]/30 ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Număr Telefon
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        });
                        if (errors.phone)
                          setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="0744 112 555"
                      className={`border-gray-300 focus:border-[#00B5FC] focus:ring-[#00B5FC]/30 ${
                        errors.phone
                          ? "border-red-500 focus:border-red-500"
                          : ""
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">
                      Locația
                    </label>
                    <Input
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value,
                        })
                      }
                      placeholder="Ex: Centrul Vechi, Tractorul, Rășnov"
                      className="border-gray-300 focus:border-[#00B5FC] focus:ring-[#00B5FC]/30"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-gray-700">
                    Ce tapițerie trebuie curățată?
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Descrie ce mobilier tapițat trebuie curățat (canapele, fotolii, saltele, scaune auto), tipul petelor, mărimea, etc."
                    rows={4}
                    className="border-gray-300 focus:border-[#00B5FC] focus:ring-[#00B5FC]/30"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg py-6 bg-brand-gradient hover:opacity-90 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Solicită Evaluare Gratuită
                    </>
                  )}
                </Button>

                {isSubmitting && (
                  <p className="text-center text-sm text-gray-600">
                    Vă rugăm să așteptați... Se trimite
                    solicitarea dvs.
                  </p>
                )}
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 text-center space-y-4">
                <p className="text-gray-600 font-medium">
                  Preferi să vorbești direct cu specialistul?
                </p>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  <a
                    href="tel:+40744112555"
                    className="flex items-center gap-2 text-[#00245E] hover:text-[#00B5FC] transition-colors font-medium bg-[#e6f3ff] px-4 py-2 rounded-full"
                  >
                    <Phone className="w-5 h-5" />
                    0744 112 555
                  </a>
                  <a
                    href="mailto:tapiclean.romania@gmail.com"
                    className="flex items-center gap-2 text-[#00245E] hover:text-[#00B5FC] transition-colors font-medium bg-[#e6f3ff] px-4 py-2 rounded-full"
                  >
                    <Mail className="w-5 h-5" />
                    evaluare gratuita
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-gradient-reverse text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <TapiCleanLogo
                size="footer"
                variant="white"
                className="mb-4"
              />
              <p className="opacity-90 mb-6 max-w-md leading-relaxed">
                <strong>
                  Curățenie tapițerie profesională în Brașov.
                </strong>{" "}
                Servicii specializate pentru canapele, fotolii,
                saltele și scaune auto. Acoperim zona Braș și
                toate comunele limitrofe.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#00B5FC]" />
                <span>Brașov și împrejurimile (30km rază)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">
                  CPD Certified • BCCA Diploma • Asigurat
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#00B5FC]">
                Curățenie Tapițerie
              </h4>
              <ul className="space-y-2 opacity-90">
                <li className="hover:text-[#00B5FC] transition-colors cursor-pointer">
                  Canapele
                </li>
                <li className="hover:text-[#00B5FC] transition-colors cursor-pointer">
                  Fotolii
                </li>
                <li className="hover:text-[#00B5FC] transition-colors cursor-pointer">
                  Saltele
                </li>
                <li className="hover:text-[#00B5FC] transition-colors cursor-pointer">
                  Scaune Auto
                </li>
                <li className="hover:text-[#00B5FC] transition-colors cursor-pointer">
                  Urgențe 24h
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-[#00B5FC]">
                Contact
              </h4>
              <div className="space-y-3 opacity-90">
                <a
                  href="tel:+40744112555"
                  className="flex items-center gap-2 hover:text-[#00B5FC] transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>0744 112 555</span>
                </a>
                <a
                  href="mailto:tapiclean.romania@gmail.com"
                  className="flex items-center gap-2 hover:text-[#00B5FC] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>tapiclean.romania@gmail.com</span>
                </a>
                <div className="pt-2 border-t border-white/20">
                  <p className="text-sm">
                    <strong>Luni - Sâmbătă:</strong> 8:00 -
                    19:00
                  </p>
                  <p className="text-sm">
                    <strong>Duminică:</strong> 10:00 - 17:00
                  </p>
                  <p className="text-sm text-green-300 font-medium">
                    ⚡ Urgențe 24/7 în zonă
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center opacity-90">
            <p>
              &copy; 2025 TapiClean - Curățenie Tapițerie
              Brașov. Toate drepturile rezervate.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-sm">Certificat BCCA</span>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-white/20 rounded flex items-center justify-center text-xs">
                  CPD
                </div>
                <div className="w-8 h-5 bg-white/20 rounded flex items-center justify-center text-xs">
                  SSL
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Widget */}
      <FloatingContact />

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}