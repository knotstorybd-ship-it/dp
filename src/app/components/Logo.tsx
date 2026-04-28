import { BookOpen } from "lucide-react";

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: string;
  isDark?: boolean;
}

export function Logo({ className = "", iconSize = 28, textSize = "text-2xl", isDark = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 group transition-all duration-300 ${className}`}>
      {/* Book Icon Container */}
      <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-all duration-500 shadow-lg ${
        isDark 
          ? "bg-white/10 text-white" 
          : "bg-emerald-600 text-white shadow-emerald-600/20"
      }`}>
        <BookOpen size={iconSize} />
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span 
          style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
          className={`font-bold ${textSize} tracking-tight ${
            isDark ? "text-white" : "text-emerald-950"
          }`}
        >
          ডিজিটাল <span className={isDark ? "text-emerald-300" : "text-emerald-600"}>প্রকাশনী</span>
        </span>
        <span className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 ${
          isDark ? "text-emerald-200/50" : "text-emerald-600/50"
        }`}>
          Digital Prokashoni
        </span>
      </div>
    </div>
  );
}
