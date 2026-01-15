
import React from 'react';

interface SkyBackgroundProps {
  scrollY: number;
}

const SkyBackground: React.FC<SkyBackgroundProps> = ({ scrollY }) => {
  // Parallax effect for depth
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.1}px)`,
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#e0f2fe]">
      {/* Primary Bright Sky Image - Vibrant blue with large, soft white clouds */}
      <div 
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center opacity-100 transition-transform duration-700 ease-out animate-slow-zoom"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2574&auto=format&fit=crop)',
          ...parallaxStyle 
        }}
      ></div>

      {/* Floating Cloud Textures - Layered to create subtle horizontal movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute bottom-[-5%] left-0 w-[200%] h-[70%] opacity-30 animate-drift-slow mix-blend-screen"
          style={{ 
            backgroundImage: 'url(https://raw.githubusercontent.com/taniarascia/sandbox/master/clouds/clouds.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x'
          }}
        ></div>
        <div 
          className="absolute top-[10%] left-[-50%] w-[200%] h-[40%] opacity-15 animate-drift-medium mix-blend-screen"
          style={{ 
            backgroundImage: 'url(https://raw.githubusercontent.com/taniarascia/sandbox/master/clouds/clouds.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat-x'
          }}
        ></div>
      </div>

      {/* Soft Ethereal Overlays - Brightening the top and bottom for content clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/70"></div>
      
      {/* Subtle Grain Overlay for high-end digital texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <style>{`
        @keyframes drift {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-drift-slow {
          animation: drift 240s linear infinite;
        }
        .animate-drift-medium {
          animation: drift 180s linear infinite;
        }
        .animate-slow-zoom {
          animation: slowZoom 60s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SkyBackground;
