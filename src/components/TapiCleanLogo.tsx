import React from 'react';
import Layer1 from '../imports/Layer1-39-162';

interface TapiCleanLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'custom' | 'footer';
  variant?: 'default' | 'white';
}

export function TapiCleanLogo({ className = '', size = 'md', variant = 'default' }: TapiCleanLogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-8',   // 2:1 aspect ratio for small
    md: 'w-24 h-12',  // 2:1 aspect ratio for medium  
    lg: 'w-32 h-16',   // 2:1 aspect ratio for large
    custom: 'w-[166px] h-[37px]',  // Custom 166px x 37px dimensions
    footer: 'w-[207px] h-[27px]'   // Footer 207px x 27px dimensions
  };

  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        {/* Logo Container with proper aspect ratio */}
        <div className={`${sizeClasses[size]} relative overflow-hidden ${variant === 'white' ? '' : 'rounded-lg'}`}>
          {/* Background with subtle gradient - only for default variant */}
          {variant === 'default' && (
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 shadow-sm"></div>
          )}
          
          {/* Imported Logo */}
          <div 
            className="relative z-20 w-46 h-8 p-0.5" 
            style={{ 
              '--fill-0': variant === 'white' ? 'white' : '#00245E',
            } as React.CSSProperties}
          >
            <Layer1 />
          </div>
        </div>
        
        {/* Subtle glow effect - only for default variant */}
        {variant === 'default' && (
          <div className={`${sizeClasses[size]} bg-[#00B5FC]/10 rounded-lg absolute inset-0 blur-sm -z-10`}></div>
        )}
      </div>
    </div>
  );
}