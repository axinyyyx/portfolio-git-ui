import React from "react";
import { profile } from "../../data/profile";

export default function About() {
  if (!profile.about || profile.about.trim() === "") return null;

  return (
    <div className="card shadow-lg card-sm bg-base-100 w-full">
      <div className="card-body p-6">
        
        {/* Title */}
        <h5 className="card-title text-base mb-2">
          <span className="text-base-content opacity-70">About Me</span>
        </h5>
        
        {/* Content */}
        <p className="text-base-content/60 text-sm leading-relaxed font-normal">
          {profile.about}
        </p>
        
      </div>
    </div>
  );
}
