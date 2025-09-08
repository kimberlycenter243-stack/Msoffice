import React from 'react';
import { FileText, BarChart3, Presentation, FileSpreadsheet, Palette, Globe, Users } from 'lucide-react';

export default function About() {
  const tools = [
    { name: 'Word', icon: FileText, color: 'text-blue-400' },
    { name: 'Excel', icon: BarChart3, color: 'text-green-400' },
    { name: 'PowerPoint', icon: Presentation, color: 'text-red-400' },
    { name: 'Docs', icon: FileText, color: 'text-blue-400' },
    { name: 'Sheets', icon: FileSpreadsheet, color: 'text-green-400' },
    { name: 'Slides', icon: Presentation, color: 'text-orange-400' },
    { name: 'Canva (bonus)', icon: Palette, color: 'text-purple-400' }
  ];

  return (
    <section id="a-propos" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            À propos de la formation
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-gray-300 leading-relaxed">
              Une formation pratique et intensive pour apprendre à utiliser efficacement Microsoft Office et Google Workspace.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Objectifs : gagner du temps, mieux collaborer et augmenter votre productivité au quotidien.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div key={tool.name} className="text-center group">
                <div className="bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 border border-slate-600/50">
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${tool.color} group-hover:scale-110 transition-transform`} />
                  <p className="text-sm font-medium text-gray-300">{tool.name}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
            <div className="text-gray-300">Outils maîtrisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-gray-300">Pratique</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
            <div className="text-gray-300">Mois intensif</div>
          </div>
        </div>
      </div>
    </section>
  );
}