import React from 'react';
import { socials } from "../../data/social";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Globe, 
  BookOpen, 
  Terminal, 
  Link 
} from "lucide-react";

export default function Social() {
  const activeSocials = Object.entries(socials).filter(([_, url]) => url && url.trim() !== "");
  if (activeSocials.length === 0) return null;

  const getIcon = (key) => {
    switch (key.toLowerCase()) {
      case 'github':
        return <Github className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
      case 'twitter':
        return <Twitter className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
      case 'linkedin':
        return <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
      case 'medium':
        return <BookOpen className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
      case 'dev':
        return <Terminal className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
      case 'website':
        return <Globe className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
      case 'mastodon':
        return (
          <svg 
            stroke="currentColor" 
            fill="currentColor" 
            strokeWidth="0" 
            viewBox="0 0 448 512" 
            className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z" />
          </svg>
        );
      default:
        return <Link className="w-4 h-4 text-primary group-hover:scale-110 transition-transform duration-300" />;
    }
  };

  const getLabel = (key) => {
    if (key.toLowerCase() === 'x' || key.toLowerCase() === 'twitter') return 'X';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="card shadow-xl border border-base-content/5 bg-base-100 w-full hover:border-primary/10 transition-all duration-300">
      <div className="card-body p-6">
        
        <h5 className="card-title text-base mb-3 font-bold text-base-content opacity-75">
          Social Profiles
        </h5>

        <div className="flex flex-col gap-1.5">
          {activeSocials.map(([network, url]) => (
            <a 
              key={network}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center py-2 px-2 border-b border-base-content/5 last:border-0 hover:bg-base-200/60 rounded-xl transition-all duration-300 group"
            >
              {/* Left Side: Icon & Label */}
              <div className="grow font-semibold text-sm flex items-center gap-3 text-base-content/80 group-hover:text-primary transition-colors">
                <div className="p-1.5 rounded-lg bg-base-200 group-hover:bg-primary/15 transition-all duration-300">
                  {getIcon(network)}
                </div>
                <span>{getLabel(network)}</span>
              </div>
              
              {/* Right Side: URL handle */}
              <div className="text-xs font-medium text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-300">
                <span>View</span>
                <span className="text-[10px]">➜</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
