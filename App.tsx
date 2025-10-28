import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-sans">
      <Header />
      <main className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-8 text-text-secondary">
        <p className="text-base">&copy; {new Date().getFullYear()} Radka Filipová. Všechna práva vyhrazena.</p>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default App;