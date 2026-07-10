import React from 'react';
import { profile } from "../../data/profile";
import { MapPin, Mail, Phone, Compass } from "lucide-react";

export default function Contact() {
  const hasContactInfo = profile.basedIn || profile.location || profile.email || profile.phone;
  if (!hasContactInfo) return null;

  return (
    <div className="card shadow-xl border border-base-content/5 bg-base-100 w-full hover:border-primary/10 transition-all duration-300">
      <div className="card-body p-6">
        
        <h5 className="card-title text-base mb-3 font-bold text-base-content opacity-75">
          Contact Details
        </h5>

        <div className="flex flex-col gap-1.5">
          {/* Based In */}
          {profile.basedIn && profile.basedIn.trim() !== "" && (
            <div className="flex justify-between items-center py-2 px-2 border-b border-base-content/5 last:border-0 hover:bg-base-200/40 rounded-xl transition-all duration-300 group">
              <div className="grow font-semibold text-sm flex items-center gap-3 text-base-content/85 group-hover:text-primary transition-colors">
                <div className="p-1.5 rounded-lg bg-base-200 group-hover:bg-primary/15 transition-all duration-300">
                  <Compass className="w-4 h-4 text-primary" />
                </div>
                <span>Based in</span>
              </div>
              <div className="text-xs font-semibold text-base-content/60 group-hover:text-base-content transition-colors">
                {profile.basedIn}
              </div>
            </div>
          )}

          {/* Location */}
          {profile.location && profile.location.trim() !== "" && (
            <div className="flex justify-between items-center py-2 px-2 border-b border-base-content/5 last:border-0 hover:bg-base-200/40 rounded-xl transition-all duration-300 group">
              <div className="grow font-semibold text-sm flex items-center gap-3 text-base-content/85 group-hover:text-primary transition-colors">
                <div className="p-1.5 rounded-lg bg-base-200 group-hover:bg-primary/15 transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Location</span>
              </div>
              <div className="text-xs font-semibold text-base-content/60 group-hover:text-base-content transition-colors text-right max-w-[160px] truncate" title={profile.location}>
                {profile.location.split(',')[0]}
              </div>
            </div>
          )}

          {/* Email */}
          {profile.email && profile.email.trim() !== "" && (
            <div className="flex justify-between items-center py-2 px-2 border-b border-base-content/5 last:border-0 hover:bg-base-200/40 rounded-xl transition-all duration-300 group">
              <div className="grow font-semibold text-sm flex items-center gap-3 text-base-content/85 group-hover:text-primary transition-colors">
                <div className="p-1.5 rounded-lg bg-base-200 group-hover:bg-primary/15 transition-all duration-300 flex-shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>Email</span>
              </div>
              <div className="text-xs font-semibold max-w-[160px] truncate text-right">
                <a 
                  href={`mailto:${profile.email}`} 
                  className="link link-hover text-primary font-bold"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          )}

          {/* Phone */}
          {profile.phone && profile.phone.trim() !== "" && (
            <div className="flex justify-between items-center py-2 px-2 border-b border-base-content/5 last:border-0 hover:bg-base-200/40 rounded-xl transition-all duration-300 group">
              <div className="grow font-semibold text-sm flex items-center gap-3 text-base-content/85 group-hover:text-primary transition-colors">
                <div className="p-1.5 rounded-lg bg-base-200 group-hover:bg-primary/15 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>Phone</span>
              </div>
              <div className="text-xs font-semibold text-right">
                <a href={`tel:${profile.phone}`} className="link link-hover text-primary font-bold">
                  {profile.phone}
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
