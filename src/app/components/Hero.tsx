import heroLogo from "figma:asset/a55efbbc1f375e713eb211a05e9afbbb7d61b13e.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F14] via-[#3A1C5A] to-[#6A3DBE] opacity-40"></div>
      
      {/* Diagonal white overlay */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white opacity-5 transform skew-x-[-15deg] translate-x-1/2"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-12 flex justify-center">
          <img 
            src={heroLogo} 
            alt="AITT Logo" 
            className="h-32 w-auto drop-shadow-[0_0_30px_rgba(138,111,216,0.5)]"
          />
        </div>
        
        {/* Headline */}
        <h1 className="mb-6 text-[#E6E9EF] drop-shadow-[0_0_20px_rgba(138,111,216,0.3)]">
          AI Trading Terminal
        </h1>
        
        <p className="text-2xl text-[#B6BDC9] mb-12 max-w-2xl mx-auto">
          An offline-first AI-assisted trading system
        </p>
        
        {/* Status badge */}
        <div className="inline-block px-6 py-3 bg-[#161E2B] border border-[#6A3DBE]/30 rounded-lg">
          <p className="text-[#8B6FD8]">Project in active development</p>
        </div>
      </div>
    </section>
  );
}