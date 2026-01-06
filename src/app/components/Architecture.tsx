import architectureDiagram from "figma:asset/bf1e94d1ab5153ce552420d67217be8bd2562bad.png";

export function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-8 text-center text-[#E6E9EF]">System Architecture</h2>
        
        <p className="text-xl text-[#B6BDC9] text-center mb-12 max-w-3xl mx-auto">
          A transparent view of how AITT's components interact to maintain separation of concerns and operational independence.
        </p>
        
        <div className="bg-[#161E2B] border border-[#3A1C5A]/30 rounded-lg p-8 overflow-hidden">
          <img 
            src={architectureDiagram} 
            alt="AITT System Architecture Diagram" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}