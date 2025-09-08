import React from 'react';
import { MessageCircle, Globe } from 'lucide-react';

export default function Contact() {
  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+243 828 771 246",
      href: "https://wa.me/243828771246",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      label: "Site web", 
      value: "kimberly.center",
      href: "https://kimberly.center/",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-300">
            Une question ? Contactez-nous directement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 border border-slate-600/50 hover:border-slate-500 transition-all duration-300 hover:scale-105 text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {contact.label}
                  </h3>
                  
                  <p className="text-gray-300 text-lg font-medium">
                    {contact.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}