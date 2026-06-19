import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MissionBriefing() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        
        .font-oswald { font-family: 'Oswald', sans-serif; }
        .font-mono { font-family: 'Space Mono', monospace; }
        
        .stamp {
          color: #ef4444;
          border: 4px solid #ef4444;
          transform: rotate(-8deg);
          border-radius: 4px;
          padding: 4px 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          opacity: 0.8;
        }

        .bg-navy { background-color: #0a1628; }
        .bg-lighter-navy { background-color: #112240; }
        .border-accent { border-color: #ea580c; }
        .text-accent { color: #ea580c; }
        .scanline {
          background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1));
          background-size: 100% 4px;
        }
      `}</style>

      <div className="min-h-[844px] w-[390px] bg-navy text-slate-300 font-mono flex flex-col relative overflow-hidden select-none">
        {/* Subtle scanline overlay for military terminal feel */}
        <div className="absolute inset-0 scanline pointer-events-none opacity-20 mix-blend-overlay"></div>
        
        <div className="flex-1 p-5 flex flex-col items-center justify-center relative z-10">
          
          {/* Logo Placeholder */}
          <div className="w-[110px] h-[110px] rounded-full border-2 border-accent/50 bg-lighter-navy flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(234,88,12,0.15)] relative">
            <ShieldAlert className="w-12 h-12 text-accent/80" />
            <div className="absolute inset-0 border border-accent/20 rounded-full animate-ping opacity-20 duration-[3s]"></div>
          </div>

          {/* Briefing Document */}
          <div className="w-full bg-lighter-navy border border-accent/40 rounded shadow-2xl relative p-5 overflow-hidden">
            {/* Top right stamp */}
            <div className="absolute top-4 right-2 stamp text-xl font-oswald z-10">
              CONFIDENTIAL
            </div>

            <div className="absolute top-0 left-0 w-full h-1 bg-accent/80"></div>
            
            <div className="text-[10px] text-accent/60 mb-4 tracking-widest uppercase">
              Doc. ID: HRP-B-{Math.floor(Date.now() / 1000).toString().slice(-6)}
            </div>

            <h1 className="font-oswald text-3xl font-bold text-white tracking-wide uppercase mb-1">
              Welcome to Hangar B
            </h1>
            <p className="text-sm text-slate-400 mb-6 uppercase tracking-wider">
              Floyd Bennett Field · Brooklyn, NY
            </p>

            {/* Document Data Fields */}
            <div className="space-y-4 mb-6 border-y border-dashed border-slate-600 py-4">
              <div className="grid grid-cols-[80px_1fr] gap-2 items-start text-xs">
                <span className="text-accent/80 font-bold tracking-wider">LOCATION:</span>
                <span className="text-slate-300">Sector 7, Floyd Bennett Field</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-2 items-start text-xs">
                <span className="text-accent/80 font-bold tracking-wider">OPERATOR:</span>
                <span className="text-slate-300">H.A.R.P. Volunteers</span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-2 items-start text-xs">
                <span className="text-accent/80 font-bold tracking-wider">MISSION:</span>
                <span className="text-slate-300">Self-guided reconnaissance &amp; historical preservation.</span>
              </div>
            </div>

            {/* Standing Orders */}
            <div className="mb-8">
              <h2 className="font-oswald text-xl text-red-500 font-bold tracking-wide uppercase mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                Standing Orders
              </h2>
              <div className="text-sm leading-relaxed text-slate-300 border-l-2 border-red-500/30 pl-3">
                This self-guided tour is provided by the H.A.R.P. (Historic Aircraft Restoration Project) volunteers. 
                Please keep a safe distance from all aircraft and displays. Do not touch the exhibits. 
                Photography is encouraged — just be mindful of other visitors.
              </div>
            </div>

            {/* Action Button */}
            <Button 
              className="w-full bg-[#ea580c] hover:bg-[#ea580c]/80 text-white font-oswald text-xl py-6 tracking-widest uppercase rounded-sm border border-[#ea580c]"
            >
              Acknowledge &amp; Proceed
            </Button>
          </div>

          <div className="mt-8 text-xs text-slate-500 tracking-[0.2em]">
            END OF TRANSMISSION
          </div>

        </div>
      </div>
    </>
  );
}
