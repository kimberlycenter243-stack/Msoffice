import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  const handleCTAClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Maîtrisez 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}MS Office
              </span>
              <br />
              et 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Google Workspace
              </span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl">
                en 1 mois
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Les outils indispensables pour booster votre productivité !
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              {['Word • Excel • PowerPoint', 'Google Docs • Sheets • Slides', 'Bonus : Canva'].map((badge) => (
                <span key={badge} className="px-4 py-2 bg-slate-700/50 text-gray-200 rounded-full text-sm font-medium border border-slate-600">
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleCTAClick('#inscription')}
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 group"
              >
                Je m'inscris maintenant
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button
                onClick={() => handleCTAClick('#programme')}
                className="inline-flex items-center px-8 py-4 bg-transparent hover:bg-slate-700/50 text-white font-semibold rounded-lg border-2 border-slate-600 hover:border-slate-500 transition-all duration-200"
              >
                <PlayCircle className="mr-2" size={20} />
                Voir le programme
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Participant souriant utilisant un ordinateur"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-gray-600">Pratique</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-blue-500 rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-bold text-white">1 mois</div>
              <div className="text-sm text-blue-100">Formation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}