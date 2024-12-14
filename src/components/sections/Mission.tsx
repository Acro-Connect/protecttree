import { Leaf, Sprout, Users } from 'lucide-react';
import { Card } from '../ui/Card';

export function Mission() {
  return (
    <section id="mission" className="min-h-screen bg-white/90 backdrop-blur-sm py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-green-900 mb-12 text-center">Our Mission</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <Card
            icon={<Sprout />}
            title="Plant & Protect"
            description="We're committed to planting millions of trees and protecting existing forests from deforestation."
          />
          <Card
            icon={<Leaf />}
            title="Biodiversity"
            description="Supporting diverse ecosystems and protecting endangered species through forest conservation."
          />
          <Card
            icon={<Users />}
            title="Community"
            description="Working with local communities to create sustainable forest management practices."
          />
        </div>
      </div>
    </section>
  );
}