// components/ui/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverable = true 
}) => {
  return (
    <div 
      className={`
        bg-white/80 border border-black/5 rounded-2xl p-8 
        backdrop-blur-lg shadow-sm
        transition-all duration-300 ease-out
        ${hoverable ? 'hover:bg-white/95 hover:shadow-lg hover:-translate-y-2 hoverable' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
