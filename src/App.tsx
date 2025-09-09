import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Program from './components/Program';
import InfoGrid from './components/InfoGrid';
import RegistrationForm from './components/RegistrationForm';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const navigation = [
  { label: 'Programme', href: '#programme' },
  { label: 'Infos pratiques', href: '#infos' },
  { label: 'FAQ', href: '#faq' }
];

const logo = {
  src: 'assets/logo-kimberly.svg',
  alt: 'Logo Kimberly Center'
};

const cta = {
  label: 'Je m\'inscris',
  href: '#inscription',
  style: 'primary' as const
};

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header 
        logo={logo}
        logoLink="#"
        nav={navigation}
        cta={cta}
      />
      
      <main>
        <Hero />
        <RegistrationForm />
        <About />
        <Program />
        <InfoGrid />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;