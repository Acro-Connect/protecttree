import { Leaf, Github, Twitter, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content > *', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-green-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="footer-content grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-6 h-6" />
              <span className="text-xl font-bold">TreeGuardians</span>
            </div>
            <p className="text-green-300">
              Together we can make a difference. Join us in our mission to protect and restore Earth's forests.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="hover:text-green-300 transition-colors">Our Mission</a></li>
              <li><a href="#impact" className="hover:text-green-300 transition-colors">Impact</a></li>
              <li><a href="#join" className="hover:text-green-300 transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Email: contact@treeguardians.org</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Forest Ave, Green City</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-300">
          © 2024 TreeGuardians. All rights reserved.
        </div>
      </div>
    </footer>
  );
}