import { Leaf } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-green-900/80 backdrop-blur-sm text-white">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Leaf className="w-8 h-8" />
          <span className="text-xl font-bold">TreeGuardians</span>
        </div>
        <div className="flex space-x-6">
          <a href="#mission" className="hover:text-green-300 transition-colors">Our Mission</a>
          <a href="#impact" className="hover:text-green-300 transition-colors">Impact</a>
          <a href="#join" className="hover:text-green-300 transition-colors">Join Us</a>
        </div>
      </div>
    </nav>
  );
}