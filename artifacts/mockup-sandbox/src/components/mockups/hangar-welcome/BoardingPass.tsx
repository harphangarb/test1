import React from 'react';
import { Plane, ArrowRight } from 'lucide-react';

export function BoardingPass() {
  return (
    <div className="min-h-[844px] w-full bg-[#e5e5df] flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden md:max-w-[390px] md:mx-auto">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Oswald:wght@400;500;700&display=swap');
        .font-ticket { font-family: 'Oswald', sans-serif; }
        .font-mono { font-family: 'Courier Prime', monospace; }
        .ticket-bg {
          background-color: #f4f4f0;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
        }
        .cutout-both {
          mask-image: radial-gradient(circle 16px at 0 50%, transparent 16px, black 16.5px), radial-gradient(circle 16px at 100% 50%, transparent 16px, black 16.5px);
          mask-composite: intersect;
          -webkit-mask-image: radial-gradient(circle 16px at 0 50%, transparent 16px, black 16.5px), radial-gradient(circle 16px at 100% 50%, transparent 16px, black 16.5px);
          -webkit-mask-composite: destination-in;
        }
      `}</style>
      
      {/* Container simulating a paper ticket */}
      <div className="w-full flex flex-col shadow-2xl rounded-xl overflow-hidden ticket-bg border border-[#d1d1cd] relative">
      
        {/* UPPER SECTION - NAVY HEADER */}
        <div className="bg-[#0f172a] text-[#f8fafc] px-6 pt-10 pb-12 relative overflow-hidden rounded-t-xl">
          {/* Faint background elements */}
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
             <Plane size={240} className="text-white" strokeWidth={0.5} />
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            {/* Logo area */}
            <div className="w-24 h-24 rounded-full border-2 border-[#cbd5e1]/30 bg-[#1e293b] flex items-center justify-center p-1 relative shadow-inner">
               <div className="w-full h-full rounded-full border border-dashed border-[#94a3b8]/50 flex items-center justify-center bg-[#0f172a] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=200&auto=format&fit=crop" alt="Vintage Aircraft" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
               </div>
               <div className="absolute -bottom-3 bg-[#cbd5e1] text-[#0f172a] text-[10px] font-bold px-3 py-1 rounded shadow-md uppercase tracking-widest font-mono">
                 H.A.R.P.
               </div>
            </div>
            
            <div className="space-y-1 w-full pt-4">
              <div className="text-[10px] text-[#94a3b8] tracking-[0.3em] uppercase font-mono mb-2">Naval Air Station New York</div>
              <h1 className="text-4xl font-ticket tracking-wider uppercase text-white drop-shadow-md">Welcome To</h1>
              <h2 className="text-5xl font-ticket tracking-tight text-[#fde047] uppercase mt-1">Hangar B</h2>
            </div>
            
            <div className="flex items-center justify-center space-x-3 w-full border-t border-b border-[#334155] py-3 mt-4">
               <div className="flex flex-col items-center">
                 <span className="text-[10px] text-[#94a3b8] uppercase font-mono">Origin</span>
                 <span className="text-lg font-ticket tracking-wide">FBF</span>
               </div>
               <Plane size={20} className="text-[#94a3b8] rotate-90" />
               <div className="flex flex-col items-center">
                 <span className="text-[10px] text-[#94a3b8] uppercase font-mono">Destination</span>
                 <span className="text-lg font-ticket tracking-wide">BKLN</span>
               </div>
            </div>
            
            <p className="text-xs text-[#cbd5e1] font-mono uppercase tracking-widest mt-2">Floyd Bennett Field</p>
          </div>
        </div>

        {/* PERFORATION LINE */}
        <div className="relative h-8 bg-transparent z-20 flex items-center w-full -my-4 cutout-both">
           {/* The visual dashed line */}
           <div className="w-full h-0 border-t-2 border-dashed border-[#94a3b8]/40 absolute top-1/2 left-0 -translate-y-1/2"></div>
        </div>

        {/* LOWER SECTION - TICKET STUB */}
        <div className="px-6 pt-10 pb-8 text-[#334155] rounded-b-xl relative bg-[#f4f4f0]">
          
          <div className="grid grid-cols-2 gap-4 mb-8 pb-6 border-b border-dashed border-[#cbd5e1]">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[#64748b] tracking-wider mb-1">Gate</span>
              <span className="font-mono text-xl font-bold">01</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-[#64748b] tracking-wider mb-1">Exhibit Count</span>
              <span className="font-mono text-xl font-bold">14+</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-[10px] uppercase font-bold text-[#64748b] tracking-wider mb-1">Visitor Class</span>
              <span className="font-mono text-lg font-bold">General Public</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-sm font-ticket tracking-widest uppercase border-b-2 border-[#1e293b] inline-block pb-1">Boarding Instructions</h3>
            
            <ol className="space-y-3 font-mono text-[11px] leading-relaxed text-[#475569] list-decimal pl-4 marker:text-[#0f172a] marker:font-bold">
              <li className="pl-2">This self-guided tour is provided by the H.A.R.P. (Historic Aircraft Restoration Project) volunteers.</li>
              <li className="pl-2">Please keep a safe distance from all aircraft and displays. Do not touch the exhibits.</li>
              <li className="pl-2">Photography is encouraged — just be mindful of other visitors.</li>
            </ol>
          </div>
          
          <button className="w-full bg-[#b91c1c] hover:bg-[#991b1b] text-white py-4 px-6 rounded shadow-md active:scale-[0.98] transition-all flex items-center justify-between group hover:shadow-lg border-b-4 border-[#7f1d1d]">
             <span className="font-ticket text-xl tracking-widest uppercase">Board Now</span>
             <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-8 pt-4 border-t border-[#e2e8f0] flex flex-col items-center opacity-60">
            <div className="w-full flex justify-between h-12 relative overflow-hidden">
               {/* Simulating barcode lines */}
               {[...Array(40)].map((_, i) => (
                 <div key={i} className="bg-slate-800 h-full" style={{ width: `${Math.max(1, Math.random() * 4)}px`, marginRight: `${Math.random() * 3}px` }}></div>
               ))}
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] mt-2">HBG-FBF-001931</span>
          </div>
        </div>
      </div>
    </div>
  );
}
