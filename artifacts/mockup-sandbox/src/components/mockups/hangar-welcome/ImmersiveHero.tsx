import React from 'react';

export function ImmersiveHero() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&display=swap');
        .font-anton { font-family: 'Anton', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `}} />
      <div className="relative w-full min-h-[100dvh] flex flex-col bg-black text-white font-inter overflow-hidden">
        {/* Background Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Floyd_Bennett_Field_hangar_row_2010.jpg/1600px-Floyd_Bennett_Field_hangar_row_2010.jpg)' }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* Top / Logo */}
        <div className="relative z-10 pt-16 pb-8 flex justify-center">
          <div className="w-[110px] h-[110px] rounded-full bg-zinc-900 border-4 border-[#FF6500] flex items-center justify-center shadow-[0_0_40px_rgba(255,101,0,0.2)]">
            <span className="font-anton text-2xl tracking-widest text-[#FF6500] uppercase mt-1">H.A.R.P.</span>
          </div>
        </div>

        <div className="flex-grow"></div>

        {/* Bottom Content Panel */}
        <div className="relative z-10 px-6 pb-10 flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className="font-anton text-[52px] leading-[1.05] tracking-wide text-white uppercase drop-shadow-xl">
              Welcome to<br/>Hangar B
            </h1>
            <p className="text-zinc-300 text-[13px] font-medium tracking-wider uppercase mt-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Floyd Bennett Field · Brooklyn, NY
            </p>
          </div>

          {/* Safety Briefing */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-5 mt-2">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 bg-[#FF6500]/20 p-1.5 rounded-full shrink-0">
                <svg className="w-4 h-4 text-[#FF6500]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              </div>
              <p className="text-zinc-300 text-[13px] leading-relaxed">
                This self-guided tour is provided by the H.A.R.P. (Historic Aircraft Restoration Project) volunteers. Please keep a safe distance from all aircraft and displays. Do not touch the exhibits. Photography is encouraged — just be mindful of other visitors.
              </p>
            </div>
          </div>

          <button className="w-full bg-[#FF6500] hover:bg-[#e65a00] active:scale-[0.98] transition-transform text-white font-anton text-2xl tracking-widest uppercase py-5 rounded-none mt-2 shadow-[0_10px_40px_rgba(255,101,0,0.3)]">
            Start Tour
          </button>
        </div>
      </div>
    </>
  );
}
