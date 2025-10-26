import React from 'react';
import { Rocket, Shield, Bell, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'AI-Powered Summaries',
    desc: 'Skim less, know more. Bite-sized briefs distilled from trusted sources in real time.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    desc: 'No tracking across the web. Your interests stay on your device.',
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    desc: 'Get notified only when it matters — custom topics, quiet hours, zero spam.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    desc: 'A featherweight app with instant launches and buttery-smooth reading.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white/90">Designed for the way you read</h2>
          <p className="mt-3 text-white/60">Minimal glass layers, subtle depth, and a futuristic aesthetic.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl shadow-lg shadow-black/20 hover:shadow-black/30 transition">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 grid place-items-center text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white/90">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
