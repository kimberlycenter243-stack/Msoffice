import React from 'react';
import { FileText, BarChart3, Presentation, Globe, Palette } from 'lucide-react';

export default function Program() {
  const modules = [
    {
      title: "Module 1 — Microsoft Word",
      description: "Rédaction, styles, sommaire, modèles, publipostage.",
      icon: FileText,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Module 2 — Excel", 
      description: "Formules, tableaux, filtres, graphiques, mise en forme conditionnelle.",
      icon: BarChart3,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Module 3 — PowerPoint",
      description: "Storyline, gabarits, animations sobres, export & pitch.",
      icon: Presentation,
      color: "from-red-500 to-red-600"
    },
    {
      title: "Module 4 — Google Workspace",
      description: "Docs, Sheets, Slides : collaboration temps réel, commentaires, versions.",
      icon: Globe,
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Bonus — Canva",
      description: "Création de visuels et supports pro en un clin d'œil.",
      icon: Palette,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="programme" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Programme & Contenu
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            5 modules progressifs pour maîtriser tous les outils essentiels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={index} className="group">
                <div className="bg-slate-800 hover:bg-slate-700 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              const element = document.querySelector('#inscription');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105"
          >
            Je veux apprendre ces modules
          </button>
        </div>
      </div>
    </section>
  );
}