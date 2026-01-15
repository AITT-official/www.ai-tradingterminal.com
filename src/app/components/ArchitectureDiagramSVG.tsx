export function ArchitectureDiagramSVG() {
  return (
    <div className="w-full flex justify-center">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 900 1200"
        className="max-w-4xl"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <defs>
          <linearGradient id="bgGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0d12" />
            <stop offset="100%" stopColor="#14171d" />
          </linearGradient>
          
          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#6A3DBE" />
          </marker>
        </defs>

        <rect width="900" height="1200" fill="url(#bgGradient)" rx="8" />

        {/* Title */}
        <text
          x="450"
          y="70"
          textAnchor="middle"
          fontSize="38"
          fill="#E6E9EF"
          fontWeight="700"
          fontFamily="Inter, sans-serif"
        >
          AI Trading Terminal{" "}
          <tspan fill="#6A3DBE" fontWeight="700">v3.1</tspan>
        </text>

        <text
          x="450"
          y="110"
          textAnchor="middle"
          fontSize="16"
          fill="#B6BDC9"
          fontFamily="Inter, sans-serif"
        >
          Scalable, low-drawdown AI-assisted trading bot
        </text>

        {/* Box 1: TERMINAL GUI */}
        <rect
          x="120"
          y="160"
          width="660"
          height="150"
          rx="12"
          fill="#161E2B"
          stroke="#3A1C5A"
          strokeWidth="2"
        />
        
        <text
          x="450"
          y="195"
          textAnchor="middle"
          fontSize="20"
          fill="#E6E9EF"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          TERMINAL GUI
        </text>
        
        <text x="160" y="230" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • PnL Summary
        </text>
        <text x="160" y="255" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Graphs &amp; Indicators
        </text>
        <text x="450" y="230" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Connections
        </text>
        <text x="450" y="255" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Risk Profiles
        </text>

        {/* Arrow 1 */}
        <line
          x1="450"
          y1="310"
          x2="450"
          y2="360"
          stroke="#6A3DBE"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />

        {/* Box 2: REST CORE BACKEND */}
        <rect
          x="120"
          y="360"
          width="660"
          height="150"
          rx="12"
          fill="#161E2B"
          stroke="#3A1C5A"
          strokeWidth="2"
        />
        
        <text
          x="450"
          y="395"
          textAnchor="middle"
          fontSize="20"
          fill="#E6E9EF"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          REST CORE BACKEND
        </text>
        
        <text x="160" y="430" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Connections
        </text>
        <text x="160" y="455" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • System Logs
        </text>
        <text x="450" y="430" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Risk Profiles
        </text>

        {/* Arrow 2 */}
        <line
          x1="450"
          y1="510"
          x2="450"
          y2="560"
          stroke="#6A3DBE"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />

        {/* Box 3: TRADING AGENTS */}
        <rect
          x="120"
          y="560"
          width="660"
          height="150"
          rx="12"
          fill="#161E2B"
          stroke="#3A1C5A"
          strokeWidth="2"
        />
        
        <text
          x="450"
          y="595"
          textAnchor="middle"
          fontSize="20"
          fill="#E6E9EF"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          TRADING AGENTS
        </text>
        
        <text x="160" y="630" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Multi-Timeframe Analysis
        </text>
        <text x="160" y="655" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Variety of Markets
        </text>
        <text x="450" y="630" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Low-Drawdown
        </text>

        {/* Arrow 3 */}
        <line
          x1="450"
          y1="710"
          x2="450"
          y2="760"
          stroke="#6A3DBE"
          strokeWidth="3"
          markerEnd="url(#arrowhead)"
        />

        {/* Box 4: EXCHANGE / BROKER CONNECTIONS */}
        <rect
          x="80"
          y="760"
          width="740"
          height="270"
          rx="12"
          fill="#0F1419"
          stroke="#42C7E8"
          strokeWidth="2.5"
        />
        
        <text
          x="450"
          y="800"
          textAnchor="middle"
          fontSize="22"
          fill="#E6E9EF"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          EXCHANGE / BROKER CONNECTIONS
        </text>
        
        <text x="140" y="845" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Exchange / Learner
        </text>
        <text x="140" y="875" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Secure and Offline
        </text>
        <text x="140" y="905" fontSize="15" fill="#B6BDC9" fontFamily="Inter, sans-serif">
          • Future-Proof
        </text>

        {/* API Pills */}
        <rect
          x="200"
          y="940"
          width="200"
          height="50"
          rx="25"
          fill="#1a2845"
          stroke="#42C7E8"
          strokeWidth="1.5"
        />
        <text
          x="300"
          y="970"
          textAnchor="middle"
          fontSize="16"
          fill="#42C7E8"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          EXCHANGE API
        </text>

        <rect
          x="500"
          y="940"
          width="200"
          height="50"
          rx="25"
          fill="#2a1a45"
          stroke="#6A3DBE"
          strokeWidth="1.5"
        />
        <text
          x="600"
          y="970"
          textAnchor="middle"
          fontSize="16"
          fill="#6A3DBE"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          BROKER API
        </text>

        {/* Footer text */}
        <text
          x="450"
          y="1080"
          textAnchor="middle"
          fontSize="14"
          fill="#6B7280"
          fontFamily="Inter, sans-serif"
        >
          Offline-first architecture • Redis inactive • Cloud inactive
        </text>
      </svg>
    </div>
  );
}
