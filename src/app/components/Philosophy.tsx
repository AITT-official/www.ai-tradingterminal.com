export function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 bg-[#131A24]">
      <div className="max-w-4xl mx-auto">
        <h2 className="mb-12 text-center text-[#E6E9EF]">Philosophy</h2>
        
        <div className="space-y-8">
          <div className="bg-[#161E2B] border border-[#3A1C5A]/30 rounded-lg p-8">
            <h3 className="mb-4 text-[#E6E9EF]">Offline-First Design</h3>
            <p className="text-[#B6BDC9]">
              AITT operates independently of constant connectivity. The system is designed to function reliably 
              with or without internet access, ensuring control and stability in all conditions.
            </p>
          </div>
          
          <div className="bg-[#161E2B] border border-[#3A1C5A]/30 rounded-lg p-8">
            <h3 className="mb-4 text-[#E6E9EF]">Structural Transparency</h3>
            <p className="text-[#B6BDC9]">
              Every component serves a clear purpose. The architecture is deliberately modular, allowing each 
              layer to be understood, tested, and evolved independently without compromising the whole.
            </p>
          </div>
          
          <div className="bg-[#161E2B] border border-[#3A1C5A]/30 rounded-lg p-8">
            <h3 className="mb-4 text-[#E6E9EF]">Built for Discipline</h3>
            <p className="text-[#B6BDC9]">
              AITT is a research and development system designed to support informed observation and analysis. 
              It is not a signal service, nor does it provide trading advice. The system exists to serve 
              disciplined traders who understand their own strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
