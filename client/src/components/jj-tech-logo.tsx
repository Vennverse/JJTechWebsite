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
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-sky-500 to-sky-700 rounded-lg flex items-center justify-center shadow-lg`}>
        <div className="text-white font-bold">
          <svg viewBox="0 0 24 24" className="w-2/3 h-2/3 fill-current">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
            <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
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