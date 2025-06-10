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
      {/* Logo Image */}
      <img 
        src="/attached_assets/Screenshot 2025-06-10 110115_1749571299138.JPEG" 
        alt="JJ-Tech Logo" 
        className={`${sizeClasses[size]} object-contain`}
      />
      
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