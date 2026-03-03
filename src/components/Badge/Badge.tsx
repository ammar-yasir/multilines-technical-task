import React from 'react';
import { type BadgeVariants } from './Badge.types';

interface StatusBadgeProps {
  variant: BadgeVariants;
  label: string;
  /** Optional override for custom classes */
  className?: string;
}
export const Badge: React.FC<StatusBadgeProps> = ({ variant, label, className = "" }) => {
  // Define styles in a typed Record to ensure all cases are handled
  const styles: Record<string, string> = {
    success: 'bg-accent-green-100 text-accent-green',
    pending: 'bg-accent-yellow-100 text-accent-yellow',
    rejected: 'bg-accent-red text-accent-red',
    draft: 'bg-gray-100 text-secondary',
  };

  // Fallback to a default style if the variant doesn't match the keys above
  const currentStyle = styles[variant] || 'bg-blue-50 text-blue-600 border-blue-100';

  return (
    <span 
      className={`
        p-2.5
        rounded-30
        text-sm
        font-normal 
        inline-flex 
        items-center 
        justify-center
        whitespace-nowrap
        leading-5
        ${currentStyle} 
        ${className}
      `}
    >
      {label}
    </span>
  );
};