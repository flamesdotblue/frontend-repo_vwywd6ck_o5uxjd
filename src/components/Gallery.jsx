import React from 'react';

const shots = [
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529336953121-b0c20e96a6c1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526244434298-88fcbcb3377e?q=80&w=1200&auto=format&fit=crop',
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white/90">A peek at the experience</h2>
          <p className="mt-2 text-white/60">Mock screenshots to showcase the clean, transparent style.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shots.map((src, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md group">
              <img src={src} alt={`Newsly mock ${idx + 1}`} className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 transition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
