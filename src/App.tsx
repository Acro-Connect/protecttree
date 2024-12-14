import { useEffect, useRef } from 'react';
import { TreeScene } from './components/TreeScene';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Mission } from './components/sections/Mission';
import { Impact } from './components/sections/Impact';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scene = new TreeScene(containerRef.current);
    
    return () => {
      scene.dispose();
    };
  }, []);

  return (
    <div className="relative">
      <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen" />
      
      <div className="relative z-10">
        <Navbar />
        <main className="min-h-screen">
          <Hero />
          <Mission />
          <Impact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;