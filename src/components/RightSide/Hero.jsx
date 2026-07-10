import React from 'react';
import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <div className="card bg-base-200 shadow-xl border border-base-content/5 w-full overflow-hidden hover:border-primary/5 transition-all duration-300 relative">
      {/* Background radial highlight */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="card-body p-8 relative z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-semibold w-max mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Available for Freelance & Remote Work</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-base-content tracking-tight leading-tight">
          Hi there, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{profile.name}</span>
        </h2>
        
        {/* Subtitle */}
        <h3 className="text-lg md:text-xl font-bold text-base-content/85 mt-2 font-mono">
          {profile.title}
        </h3>

        {/* Content bio */}
        <p className="mt-5 text-base-content/65 leading-relaxed text-sm md:text-base font-normal max-w-3xl">
          Passionate self-taught developer with strong expertise in **Django**, **Flask**, web engineering, and **AI tools**. 
          I specialize in building functional real-world applications with dynamic backend controls, API integrations, and robust database architectures. 
          Explore my featured repositories, certifications, and chess tournament records below.
        </p>

      </div>
    </div>
  );
}
