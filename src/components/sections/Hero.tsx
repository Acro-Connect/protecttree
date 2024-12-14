import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="h-screen flex items-center justify-center text-white px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6">Protecting Earth's Lungs</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our mission to preserve and restore the world's forests, one tree at a time.
        </p>
        <Button>Make an Impact</Button>
      </div>
    </section>
  );
}