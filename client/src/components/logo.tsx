interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", 
    lg: "h-12 w-12"
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <svg
        className={`${sizeClasses[size]} text-brand-600`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Modern geometric logo design */}
        <rect width="40" height="40" rx="8" fill="currentColor" className="opacity-10"/>
        
        {/* First J */}
        <path
          d="M8 8h6v18c0 2.2-1.8 4-4 4s-4-1.8-4-4v-2h3v2c0 .6.4 1 1 1s1-.4 1-1V11H8V8z"
          fill="currentColor"
        />
        
        {/* Second J (mirrored) */}
        <path
          d="M26 8h6v3h-3v15c0 .6.4 1 1 1s1-.4 1-1v-2h3v2c0 2.2-1.8 4-4 4s-4-1.8-4-4V8z"
          fill="currentColor"
        />
        
        {/* Tech circuit lines */}
        <rect x="16" y="12" width="8" height="1" fill="currentColor" className="opacity-60"/>
        <rect x="16" y="16" width="8" height="1" fill="currentColor" className="opacity-60"/>
        <rect x="16" y="20" width="8" height="1" fill="currentColor" className="opacity-60"/>
        
        {/* Connection dots */}
        <circle cx="15" cy="12.5" r="1" fill="currentColor"/>
        <circle cx="25" cy="16.5" r="1" fill="currentColor"/>
        <circle cx="15" cy="20.5" r="1" fill="currentColor"/>
      </svg>
      <span className={`font-bold text-brand-600 dark:text-brand-400 ${
        size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"
      }`}>
        JJ-Tech
      </span>
    </div>
  );
}