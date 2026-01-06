import orbIcon from "figma:asset/5d7c18d9ce8b7013fcc935bacc7e5ca1c94a1008.png";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/80 backdrop-blur-md border-b border-[#3A1C5A]/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src={orbIcon} 
            alt="AITT" 
            className="h-10 w-auto"
          />
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('overview')}
            className="text-[#B6BDC9] hover:text-[#E6E9EF] transition-colors"
          >
            Overview
          </button>
          <button 
            onClick={() => scrollToSection('architecture')}
            className="text-[#B6BDC9] hover:text-[#E6E9EF] transition-colors"
          >
            Architecture
          </button>
          <button 
            onClick={() => scrollToSection('philosophy')}
            className="text-[#B6BDC9] hover:text-[#E6E9EF] transition-colors"
          >
            Philosophy
          </button>
        </nav>
      </div>
    </header>
  );
}