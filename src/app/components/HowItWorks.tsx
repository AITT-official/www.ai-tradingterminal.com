export function HowItWorks() {
  const layers = [
    {
      title: "Terminal Interface",
      description: "Visual layer for monitoring system state, performance, and configuration. No execution logic lives here."
    },
    {
      title: "Core Backend",
      description: "Central coordination layer handling data flow, logging, and risk constraints. Designed to operate independently of the interface."
    },
    {
      title: "Trading Agents",
      description: "Multiple agents analyze markets across timeframes using defined strategies. Agents operate under strict risk and system rules."
    },
    {
      title: "Exchange / Broker Connections",
      description: "Execution layer connecting the system to external markets. Can be enabled, disabled, or simulated independently."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#131A24]">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-8 text-center text-[#E6E9EF]">How It Works</h2>
        
        <p className="text-xl text-[#B6BDC9] text-center mb-16 max-w-4xl mx-auto">
          AITT is built as a modular, offline-first system where observation, decision logic, and execution are deliberately separated.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {layers.map((layer, index) => (
            <div 
              key={index}
              className="bg-[#161E2B] border border-[#3A1C5A]/30 rounded-lg p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6A3DBE]/20 border border-[#6A3DBE] flex items-center justify-center">
                  <span className="text-[#8B6FD8]">{index + 1}</span>
                </div>
                <div>
                  <h3 className="mb-3 text-[#E6E9EF]">{layer.title}</h3>
                  <p className="text-[#B6BDC9]">{layer.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-lg text-[#B6BDC9] text-center mt-12 italic">
          Each layer can evolve independently, ensuring robustness, safety, and long-term scalability.
        </p>
      </div>
    </section>
  );
}
