import React, { useEffect, useState } from "react";

export function TacticalTerminal() {
  const [bootSequence, setBootSequence] = useState<string[]>([]);
  
  // Boot sequence simulation
  useEffect(() => {
    const lines = [
      "HANGAR B TOUR SYSTEM v2.1",
      "...",
      "LOADING EXHIBIT DATA",
      "...",
      "OK",
      "VISITOR ACCESS: AUTHORIZED"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setBootSequence(prev => {
        if (prev.length < lines.length) {
          return [...prev, lines[i]];
        }
        return prev;
      });
      i++;
      if (i >= lines.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[390px] min-h-[844px] bg-[#0a0a0a] text-[#39ff14] font-mono overflow-hidden mx-auto flex flex-col p-6 selection:bg-[#39ff14] selection:text-black">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        .font-terminal {
          font-family: 'VT323', monospace;
          text-transform: uppercase;
        }

        .crt-scanlines {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.2)
          );
          background-size: 100% 4px;
          pointer-events: none;
        }
        
        @keyframes flicker {
          0% { opacity: 0.95; }
          5% { opacity: 0.85; }
          10% { opacity: 0.95; }
          15% { opacity: 1; }
          100% { opacity: 1; }
        }

        .crt-flicker {
          animation: flicker 4s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
        
        .glow-text {
          text-shadow: 0 0 5px rgba(57, 255, 20, 0.7);
        }
        
        .glow-box {
          box-shadow: 0 0 10px rgba(57, 255, 20, 0.4), inset 0 0 10px rgba(57, 255, 20, 0.4);
        }
      `}</style>
      
      {/* Scanline Overlay */}
      <div className="absolute inset-0 z-50 crt-scanlines mix-blend-multiply"></div>
      
      {/* CRT Vignette */}
      <div className="absolute inset-0 z-40 pointer-events-none" style={{
        background: "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.6) 100%)"
      }}></div>

      <div className="relative z-10 crt-flicker flex flex-col h-full font-terminal glow-text tracking-wider text-xl leading-relaxed flex-grow">
        
        {/* Header / Boot Sequence */}
        <div className="mb-6 h-40 shrink-0 text-left">
          {bootSequence.map((line, idx) => (
            <div key={idx} className="mb-1">{">"} {line}</div>
          ))}
          {bootSequence.length < 6 && (
            <div className="inline-block w-3 h-5 bg-[#39ff14] cursor-blink align-middle ml-1"></div>
          )}
        </div>

        <div className={\`flex flex-col flex-grow transition-opacity duration-1000 \${bootSequence.length >= 6 ? 'opacity-100' : 'opacity-0'}\`}>
          {/* Logo area */}
          <div className="flex justify-center mb-8 shrink-0">
            <div className="relative w-[110px] h-[110px] rounded-full border-2 border-[#39ff14] glow-box flex items-center justify-center overflow-hidden bg-[#001a00]">
              <div className="absolute inset-0 bg-[#39ff14] opacity-10"></div>
              {/* Crosshair lines */}
              <div className="absolute w-full h-[2px] bg-[#39ff14] opacity-50"></div>
              <div className="absolute h-full w-[2px] bg-[#39ff14] opacity-50"></div>
              {/* Concentric circle */}
              <div className="absolute w-[60px] h-[60px] rounded-full border border-[#39ff14] opacity-40"></div>
              <span className="relative z-10 text-2xl font-bold bg-[#0a0a0a] px-1">H.A.R.P.</span>
            </div>
          </div>

          <div className="text-center mb-10 shrink-0">
            <h1 className="text-4xl mb-2 glow-text">Welcome to Hangar B</h1>
            <p className="text-xl opacity-80">Floyd Bennett Field · Brooklyn, NY</p>
          </div>

          <div className="mb-8 border-2 border-[#39ff14] p-4 glow-box bg-[#001100] shrink-0 text-left">
            <h2 className="text-2xl mb-2">SAFETY PROTOCOL NOTICE:</h2>
            <p className="text-lg opacity-90 text-left leading-tight">
              This self-guided tour is provided by the H.A.R.P. (Historic Aircraft Restoration Project) volunteers. Please keep a safe distance from all aircraft and displays. Do not touch the exhibits. Photography is encouraged — just be mindful of other visitors.
            </p>
          </div>

          <div className="mt-auto shrink-0 pb-6">
            <button className="w-full text-left bg-transparent border-2 border-[#39ff14] text-[#39ff14] py-4 px-4 text-2xl hover:bg-[#39ff14] hover:text-[#0a0a0a] transition-colors group relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#39ff14]/50">
              <span className="relative z-10 flex items-center">
                <span className="mr-3 group-hover:animate-pulse">{">"}</span> 
                INITIALIZE TOUR [ENTER]
                <span className="ml-auto opacity-0 group-hover:opacity-100 cursor-blink bg-[#0a0a0a] w-3 h-5 inline-block"></span>
              </span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
