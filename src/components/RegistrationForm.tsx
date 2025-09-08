import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { FormationMSOfficeInsert } from '../lib/supabase';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    profession: '',
    modalite_paiement: '',
    acceptation: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Préparer les données pour Supabase
      const insertData: FormationMSOfficeInsert = {
        nom: formData.nom.trim(),
        email: formData.email.trim().toLowerCase(),
        telephone: formData.telephone.trim(),
        profession: formData.profession.trim() || null,
        modalite_paiement: formData.modalite_paiement,
        acceptation: formData.acceptation
      };

      // Insérer dans Supabase
      const { data, error: supabaseError } = await supabase
        .from('formation_msoffice')
        .insert([insertData])
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      console.log('Inscription enregistrée:', data);
      setIsSubmitted(true);
      
      // Réinitialiser le formulaire
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        profession: '',
        modalite_paiement: '',
        acceptation: false
      });
      
    } catch (err: any) {
      console.error('Erreur lors de l\'inscription:', err);
      
      // Gestion des erreurs spécifiques
      if (err.code === '23505') {
        setError('Cette adresse email est déjà utilisée pour une inscription.');
      } else if (err.message) {
        setError(`Erreur: ${err.message}`);
      } else {
        setError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="inscription" className="py-20 bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Inscription enregistrée !</h2>
            <p className="text-xl text-gray-300 mb-8">
              Merci ! Votre inscription a bien été enregistrée. Nous vous contacterons rapidement.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setError(null);
              }}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Faire une nouvelle inscription
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscription" className="py-20 bg-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Inscription
          </h2>
          <p className="text-xl text-gray-300">
            Places limitées — réservez la vôtre maintenant.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Votre nom complet"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-2">
                Téléphone (WhatsApp) *
              </label>
              <input
                type="tel"
                id="telephone"
                name="telephone"
                required
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="+243 xxx xxx xxx"
              />
            </div>

            <div>
              <label htmlFor="profession" className="block text-sm font-medium text-gray-300 mb-2">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                value={formData.profession}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Votre profession"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="modalite_paiement" className="block text-sm font-medium text-gray-300 mb-2">
              Modalité de paiement *
            </label>
            <select
              id="modalite_paiement"
              name="modalite_paiement"
              required
              value={formData.modalite_paiement}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="">Choisissez une option</option>
              <option value="comptant">Paiement comptant (109 $ avec inscription)</option>
              <option value="tranches">Paiement en tranches (acompte puis solde)</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="acceptation"
                required
                checked={formData.acceptation}
                onChange={handleChange}
                className="mt-1 w-5 h-5 text-blue-500 bg-slate-600 border-slate-500 rounded focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-sm text-gray-300">
                Je confirme l'exactitude de mes informations. *
              </span>
            </label>
          </div>

          <div className="mb-6 p-4 bg-slate-600/50 rounded-lg border border-slate-500">
            <p className="text-xs text-gray-400">
              Vos informations sont sécurisées et ne seront utilisées que pour vous contacter au sujet de cette formation.
            </p>
          </div>

          <button
            type="submit"
            disabled={isLoading || !formData.acceptation}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
            ) : (
              <>
                <Send className="mr-2" size={20} />
                Je réserve ma place
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}