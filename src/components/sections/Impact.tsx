import { useEffect, useRef } from 'react';
import { EarthScene } from '../3d/EarthScene';

export function Impact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const scene = new EarthScene(containerRef.current);
    
    return () => {
      scene.dispose();
    };
  }, []);

  return (
    <section id="impact" className="min-h-screen bg-gray-900 py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Global Impact</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 space-y-6">
              <div className="text-green-400">
                <div className="text-5xl font-bold mb-2">1M+</div>
                <div className="text-xl">Trees Planted</div>
              </div>
              
              <div className="text-blue-400">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-xl">Countries Reached</div>
              </div>
              
              <div className="text-yellow-400">
                <div className="text-5xl font-bold mb-2">100K+</div>
                <div className="text-xl">Volunteers Worldwide</div>
              </div>
            </div>
          </div>
          
          <div ref={containerRef} className="h-[400px]" />
        </div>
      </div>
    </section>
  );
}