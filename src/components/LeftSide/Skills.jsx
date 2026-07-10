import React from 'react';
import { skills } from "../../data/skills";

export default function Skills() {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="card shadow-xl border border-base-content/5 bg-base-100 w-full hover:border-primary/10 transition-all duration-300">
      <div className="card-body p-6">
        
        <h5 className="card-title text-base mb-3 font-bold text-base-content opacity-75">
          Tech Stack
        </h5>
        
        <div className="flex flex-wrap gap-2.5 mt-2">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-base-200 hover:bg-primary/10 border border-transparent hover:border-primary/20 text-base-content/80 hover:text-primary transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 cursor-default select-none shadow-sm"
            >
              {skill}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
