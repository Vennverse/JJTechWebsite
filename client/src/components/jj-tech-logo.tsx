interface JJTechLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function JJTechLogo({ className = "", size = "md" }: JJTechLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Professional Logo */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg viewBox="0 0 48 48" className="w-full h-full">
          {/* Main Circle Background */}
          <circle cx="24" cy="24" r="23" fill="url(#logoGradient)" stroke="#0284c7" strokeWidth="1"/>
          
          {/* Inner Tech Pattern */}
          <circle cx="24" cy="24" r="18" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3"/>
          <circle cx="24" cy="24" r="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5"/>
          
          {/* JJ Letters */}
          <text x="24" y="28" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="Arial, sans-serif">JJ</text>
          
          {/* Tech Circuit Elements */}
          <rect x="12" y="12" width="2" height="2" fill="#ffffff" opacity="0.8"/>
          <rect x="34" y="12" width="2" height="2" fill="#ffffff" opacity="0.8"/>
          <rect x="12" y="34" width="2" height="2" fill="#ffffff" opacity="0.8"/>
          <rect x="34" y="34" width="2" height="2" fill="#ffffff" opacity="0.8"/>
          
          {/* Connecting Lines */}
          <line x1="13" y1="13" x2="18" y2="18" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
          <line x1="35" y1="13" x2="30" y2="18" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
          <line x1="13" y1="35" x2="18" y2="30" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
          <line x1="35" y1="35" x2="30" y2="30" stroke="#ffffff" strokeWidth="1" opacity="0.6"/>
          
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9"/>
              <stop offset="50%" stopColor="#0284c7"/>
              <stop offset="100%" stopColor="#0369a1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Company Name */}
      <div className="flex flex-col">
        <div className={`font-bold text-gray-800 ${textSizes[size]} leading-tight`}>
          JJ-TECH
        </div>
        <div className="text-xs text-sky-600 font-medium">
          Technology Solutions
        </div>
      </div>
    </div>
  );
}