import React from 'react';
import { Facebook, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Kimberly Center</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Formation pratique MS Office & Google Workspace pour booster votre productivité professionnelle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
              <a href="https://wa.me/243828771246" className="w-10 h-10 bg-slate-700 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5 text-gray-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: 'Accueil', href: '#' },
                { label: 'Programme', href: '#programme' },
                { label: 'Inscription', href: '#inscription' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Coordonnées</h4>
            <div className="text-gray-300 space-y-2">
              <p>Galerie Saint Pierre</p>
              <p>Local 22, Gombe</p>
              <p className="mt-4">
                <a href="https://wa.me/243828771246" className="hover:text-blue-400 transition-colors">
                  +243 828 771 246
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 Kimberly Center. Tous droits réservés.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-slate-700 hover:bg-slate-600 rounded-full transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}