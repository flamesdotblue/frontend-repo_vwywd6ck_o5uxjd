import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white selection:bg-white/20 selection:text-white">
      {/* Subtle starry pattern */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07]" style={{backgroundImage: 'radial-gradient(1px 1px at 10px 10px, #fff 1px, transparent 0)', backgroundSize: '24px 24px'}}/>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Gallery />
      </main>

      <footer className="relative mt-20 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-black text-white grid place-items-center ring-1 ring-white/10">
              <span className="font-bold text-sm">N</span>
            </div>
            <p className="text-white/60 text-sm">© {new Date().getFullYear()} Newsly. All rights reserved.</p>
          </div>
          <div className="text-xs text-white/50">Crafted with a transparent, low-opacity aesthetic.</div>
        </div>
      </footer>
    </div>
  );
}
