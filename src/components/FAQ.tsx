import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Puis-je payer en plusieurs tranches ?",
      a: "Oui. Un acompte est demandé pour réserver votre place, le solde est payable avant la fin de la formation."
    },
    {
      q: "Dois-je avoir des bases en informatique ?",
      a: "Non. La formation s'adapte à votre niveau et prévoit une remise à niveau si nécessaire."
    },
    {
      q: "Recevrai-je une attestation ?",
      a: "Oui. Une attestation de participation est remise à la fin du parcours."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            FAQ
          </h2>
          <p className="text-xl text-gray-300">
            Les questions les plus fréquentes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 hover:bg-slate-700/50 transition-colors focus:outline-none focus:bg-slate-700/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {faq.q}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}