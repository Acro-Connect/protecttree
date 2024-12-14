import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="w-12 h-12 text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}