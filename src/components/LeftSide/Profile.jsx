import React from 'react';
import { profile } from "../../data/profile";

export default function Profile() {
  return (
    <div className="card shadow-xl border border-base-content/5 bg-base-100 w-full overflow-hidden group hover:border-primary/20 transition-all duration-300">
      <div className="flex flex-col items-center py-10 px-6">
        
        {/* Avatar with dynamic glowing ring */}
        {profile.avatar && (
          <div className="relative mb-6">
            {/* Pulsing glow ring in background */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-md scale-105 group-hover:bg-primary/30 transition-all duration-300 pointer-events-none" />
            
            <div className="avatar">
              <div className="w-32 h-32 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-4 shadow-xl transform transition-transform duration-500 group-hover:scale-105">
                <img alt={profile.name} src={profile.avatar} className="object-cover" />
              </div>
            </div>
          </div>
        )}

        {/* Profile Info */}
        <div className="text-center w-full px-4">
          <h5 className="font-bold text-2xl tracking-tight text-base-content">
            {profile.name}
          </h5>
          <div className="badge badge-primary badge-sm font-semibold uppercase tracking-wider mt-2.5 px-3 py-2 text-[10px] rounded-full">
            Available For Projects
          </div>
          <p className="mt-4 text-base-content/60 font-medium text-xs tracking-wide leading-relaxed max-w-[240px] mx-auto uppercase">
            {profile.title}
          </p>
        </div>

        {/* Download Resume Button */}
        {profile.resumeUrl && profile.resumeUrl.trim() !== "" && (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="btn btn-primary btn-sm text-xs mt-6 rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-primary/45 hover:-translate-y-0.5 transition-all duration-300"
          >
            Download Resume
          </a>
        )}

      </div>
    </div>
  );
}
