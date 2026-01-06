export function SystemOverview() {
  const features = [
    {
      title: "Offline-first architecture",
      description: "Designed to operate independently of constant internet connectivity, ensuring reliability and control."
    },
    {
      title: "Multi-agent, multi-timeframe analysis",
      description: "Multiple specialized agents analyze markets across different timeframes for comprehensive market observation."
    },
    {
      title: "Risk-aware system design",
      description: "Built with strict risk constraints and safety mechanisms at every layer of the system."
    },
    {
      title: "Modular backend & GUI separation",
      description: "Clear separation between interface, logic, and execution layers for robustness and independent evolution."
    },
    {
      title: "Built for disciplined traders, not signals",
      description: "A system designed to support informed decision-making, not to provide trading signals or advice."
    }
  ];

  return (
    <section id="overview" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-16 text-center text-[#E6E9EF]">System Overview</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#161E2B] border border-[#3A1C5A]/30 rounded-lg p-6 hover:border-[#6A3DBE]/50 transition-colors"
            >
              <h3 className="mb-3 text-[#E6E9EF]">{feature.title}</h3>
              <p className="text-[#B6BDC9]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
