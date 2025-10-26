import React from 'react';

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-xl bg-black text-white grid place-items-center shadow-lg shadow-black/30 ring-1 ring-white/10">
        <span className="font-extrabold text-lg leading-none">N</span>
      </div>
      <span className="font-semibold tracking-tight text-white/90">newsly</span>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <LogoMark />
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-white/70 hover:text-white transition">Features</a>
          <a href="#gallery" className="text-white/70 hover:text-white transition">Screenshots</a>
          <a href="#download" className="text-white/70 hover:text-white transition">Download</a>
        </nav>
        <a href="#download" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          <span className="font-medium">Download</span>
        </a>
      </div>
    </header>
  );
}
