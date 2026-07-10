import React from 'react';
import { profile } from "../../data/profile";
import { Award } from "lucide-react";

export default function Certificates() {
  const { certificates = [] } = profile;
  if (certificates.length === 0) return null;

  return (
    <div className="card bg-base-200 shadow-xl border border-base-content/5 w-full">
      <div className="card-body p-6 md:p-8">
        
        {/* Header */}
        <div className="flex items-center space-x-3.5 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl shadow-inner">
            <Award size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-base-content tracking-tight">
              Certifications
            </h3>
          </div>
        </div>

        {/* Timeline */}
        <div className="text-base-content mx-2">
          <ol className="relative border-l border-base-content/20 ml-4 mr-2 pl-4 space-y-8">
            {certificates.map((item, index) => {
              const hasUrl = item.url && item.url.trim() !== "";
              
              return (
                <li key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div 
                    className="absolute w-4.5 h-4.5 bg-base-100 rounded-full border-4 border-primary shadow-md mt-1 transition-all duration-300 group-hover:scale-125" 
                    style={{ left: "-27.5px" }}
                  />
                  
                  {/* Item Content Card */}
                  <div className="bg-base-100 p-5 rounded-2xl border border-base-content/5 group-hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                    
                    {/* Date */}
                    <div className="text-[10px] opacity-65 font-bold uppercase tracking-wider text-primary mb-1">
                      {item.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-bold text-base-content text-base md:text-lg">
                      {hasUrl ? (
                        <a 
                          target="_blank" 
                          rel="noreferrer" 
                          href={item.url}
                          className="link link-hover text-primary font-bold inline-flex items-center gap-1"
                        >
                          {item.title}
                          <span className="text-[10px]">➜</span>
                        </a>
                      ) : (
                        <span>{item.title}</span>
                      )}
                    </h3>
                    
                    {/* Issuer */}
                    <div className="mt-1 text-sm font-semibold text-base-content/70">
                      Issued by: {item.issuer}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

      </div>
    </div>
  );
}
