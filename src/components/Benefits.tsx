import React from 'react';
import { HandHeart, UserCheck, Award, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      title: "100% pratique",
      description: "Exercices et cas concrets à chaque session.",
      icon: HandHeart,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Accompagnement", 
      description: "Support et suivi personnalisé.",
      icon: UserCheck,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Attestation",
      description: "Certificat de participation à la fin du parcours.",
      icon: Award,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Tous niveaux",
      description: "Débutant à avancé, progression garantie.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="avantages" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pourquoi participer ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une formation pensée pour votre réussite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 border border-slate-600/50 hover:border-slate-500 transition-all duration-300 hover:scale-105">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}