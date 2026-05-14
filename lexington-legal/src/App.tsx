import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  Gavel, 
  Share2, 
  Globe, 
  Mail, 
  ChevronDown,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    caseType: 'Criminal',
    description: ''
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen selection:bg-secondary/30">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-serif font-bold tracking-tight text-black"
          >
            Lexington Legal
          </motion.div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className="bg-black text-white px-8 py-3 rounded-sm font-bold text-sm tracking-wider uppercase hover:bg-neutral-800 transition-all active:scale-95 shadow-md"
            >
              Consulta Privada
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2670&auto=format&fit=crop" 
            alt="Law Office"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-black leading-[1.1] mb-8">
              Representación Legal con Alto Margen de Éxito
            </h1>
            <p className="text-xl md:text-2xl text-neutral-700 mb-12 leading-relaxed max-w-2xl font-medium">
              Resolvemos sus asuntos legales con la máxima confidencialidad y rigor. Contamos con una sólida trayectoria de resultados favorables en casos críticos.
            </p>
            <div>
              <button 
                onClick={scrollToForm}
                className="bg-black text-white px-12 py-6 rounded-sm font-black text-base tracking-[0.1em] uppercase hover:bg-neutral-800 transition-colors shadow-2xl"
              >
                Consultar Mi Caso
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-8 leading-tight">Solicite su Consultoría Privada</h2>
              <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-medium">
                Un socio senior revisará su caso y le contactará en menos de 24 horas. Máxima privacidad garantizada por ley.
              </p>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, text: "Privilegio Abogado-Cliente Garantizado" },
                  { icon: Clock, text: "Respuesta en Menos de 24 Horas" },
                  { icon: Gavel, text: "Especialistas Certificados" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6">
                    <div className="p-4 bg-neutral-100 rounded-full">
                      <item.icon className="w-7 h-7 text-black" />
                    </div>
                    <span className="text-base font-black tracking-widest uppercase text-black">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-8 md:p-16 border-2 border-neutral-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-xl"
            >
              <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-black uppercase tracking-widest text-neutral-900">Nombre Completo</label>
                  <input 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="border-b-2 border-neutral-200 focus:border-black focus:ring-0 outline-hidden bg-transparent py-4 text-xl transition-colors font-semibold" 
                    placeholder="Su nombre" 
                    type="text" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-black uppercase tracking-widest text-neutral-900">Email</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-b-2 border-neutral-200 focus:border-black focus:ring-0 outline-hidden bg-transparent py-4 text-xl transition-colors font-semibold" 
                    placeholder="email@ejemplo.com" 
                    type="email" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-black uppercase tracking-widest text-neutral-900">Teléfono</label>
                  <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-b-2 border-neutral-200 focus:border-black focus:ring-0 outline-hidden bg-transparent py-4 text-xl transition-colors font-semibold" 
                    placeholder="+34 000 000 000" 
                    type="tel" 
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-sm font-black uppercase tracking-widest text-neutral-900">Fecha Preferida</label>
                  <input 
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="border-b-2 border-neutral-200 focus:border-black focus:ring-0 outline-hidden bg-transparent py-4 text-xl transition-colors font-semibold" 
                    type="date" 
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-4 relative">
                  <label className="text-sm font-black uppercase tracking-widest text-neutral-900">Tipo de Caso</label>
                  <select 
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="border-b-2 border-neutral-200 focus:border-black focus:ring-0 outline-hidden bg-transparent py-4 text-xl transition-colors appearance-none cursor-pointer font-semibold"
                  >
                    <option>Penal</option>
                    <option>Civil</option>
                    <option>Corporativo</option>
                    <option>Familiar</option>
                  </select>
                  <ChevronDown className="absolute right-0 bottom-5 w-6 h-6 text-neutral-400 pointer-events-none" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-4">
                  <label className="text-sm font-black uppercase tracking-widest text-neutral-900">Descripción del Caso</label>
                  <textarea 
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border-2 border-neutral-200 focus:border-black focus:ring-0 outline-hidden bg-white p-6 text-xl transition-colors rounded-sm min-h-[180px] font-medium" 
                    placeholder="Cuéntanos brevemente tu situación..." 
                  />
                </div>
                <div className="md:col-span-2 pt-10">
                  <button className="w-full bg-[#128C7E] text-white flex items-center justify-center gap-6 py-7 rounded-sm font-black text-2xl hover:bg-[#075E54] transition-all shadow-2xl active:scale-95 group">
                    <MessageCircle className="w-10 h-10 fill-current" />
                    Enviar vía WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="flex flex-col gap-6">
              <div className="text-2xl font-serif font-bold text-white">Lexington Legal</div>
              <p className="text-on-primary-container text-sm leading-relaxed opacity-70">
                Professional legal services for high-stakes cases. Delivering precision and authority in every matter we handle.
              </p>
            </div>
            
            {[
              { title: "Firm", links: ["About Us", "Practice Areas", "Attorney Profiles", "Contact"] },
              { title: "Resources", links: ["Privacy Policy", "Terms of Service", "Disclaimer", "Sitemap"] }
            ].map((column, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{column.title}</h4>
                <nav className="flex flex-col gap-4">
                  {column.links.map(link => (
                    <a key={link} href="#" className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity">{link}</a>
                  ))}
                </nav>
              </div>
            ))}

            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Connect</h4>
              <div className="flex gap-4">
                {[Share2, Globe, Mail].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:border-secondary hover:text-secondary transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/10 text-xs font-bold tracking-widest opacity-40 text-center uppercase">
            © 2024 Lexington Legal. All rights reserved. Professional legal services for high-stakes cases.
          </div>
        </div>
      </footer>
    </div>
  );
}
