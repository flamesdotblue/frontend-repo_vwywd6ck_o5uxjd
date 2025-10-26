import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now available in beta
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Newsly — the future of news at a glance
          </h1>
          <p className="mt-5 text-white/70 leading-relaxed">
            Your personal, real-time news companion. Curated headlines, AI summaries, and a sleek reading
            experience — all in a minimal, futuristic interface. Stay informed without the overwhelm.
          </p>

          {/* Glass card CTA */}
          <div id="download" className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-xl shadow-black/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-left">
                <h2 className="text-xl md:text-2xl font-semibold text-white/90">Get Newsly</h2>
                <p className="mt-1 text-white/60 max-w-xl">
                  Download the app to unlock lightning-fast updates, offline reading, and tailored topics. Your feed,
                  your rules — with privacy baked in.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white/90 text-black font-medium hover:bg-white transition border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.64 6.01c.87-1.04 1.46-2.49 1.3-3.93-1.25.09-2.76.87-3.64 1.9-.8.92-1.5 2.43-1.32 3.84 1.4.1 2.84-.8 3.66-1.81zM19.91 20.65c-.57 1.27-1.26 2.52-2.27 2.54-1 .02-1.32-.82-2.54-.82s-1.57.8-2.55.84c-1 .04-1.76-1.37-2.33-2.64-1.27-2.76-2.25-7.8-.94-10.08.65-1.12 1.82-1.83 3.1-1.85 1.21-.02 2.35.84 2.54.84.18 0 1.38-1.03 2.93-.88.5.02 1.93.2 2.84 1.53-.07.05-1.7.99-1.68 2.96.03 2.36 2.07 3.14 2.1 3.16-.02.06-.33 1.16-1.2 2.4z"/></svg>
                  App Store
                </a>
                <a href="#" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white/10 text-white/90 hover:bg-white/15 transition border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.2 2.02c-.13.22-.2.48-.2.78v17.4c0 .3.07.56.2.78L13.4 12 3.2 2.02zM14.7 10.68l5.6-3.2c.3-.18.7.05.7.4v8.24c0 .35-.4.58-.7.4l-5.6-3.2-1.3-.75 1.3-.89zM12.7 13.06l-8.5 8.52c.24.11.53.13.86-.02l10.5-6-2.86-2.5zM5.06 2.44l7.64 7.64 2.86-2.86-9.2-5.3c-.55-.32-1-.24-1.3.52z"/></svg>
                  Google Play
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/50 max-w-2xl mx-auto">
            Newsly delivers a clean, distraction-free experience with transparent UI layers reminiscent of the Flames
            aesthetic — soft opacity, subtle borders, and depth you can feel.
          </p>
        </div>
      </div>
    </section>
  );
}
