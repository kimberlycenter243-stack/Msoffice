import React from 'react';
import { Calendar, MapPin, DollarSign, Clock } from 'lucide-react';

export default function InfoGrid() {
  const blocks = [
    {
      icon: Calendar,
      title: "Dates",
      content: "Du 29 août au 24 septembre 2025",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Lieu", 
      content: "Kimberly Center — Galerie Saint Pierre, Local 22, Gombe",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: DollarSign,
      title: "Frais",
      content: "Inscription : 10 $ • Formation : 99 $",
      note: "✅ Paiement en tranches accepté",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Clock,
      title: "Date limite d'inscription",
      content: "25 septembre 2025",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="infos" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Informations pratiques
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tout ce que vous devez savoir avant de vous inscrire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <div key={index} className="group">
                <div className="bg-slate-800 hover:bg-slate-700 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${block.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {block.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-3">
                    {block.content}
                  </p>
                  
                  {block.note && (
                    <p className="text-sm text-green-400 font-medium">
                      {block.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}