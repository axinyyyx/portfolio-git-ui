import React from 'react';
import { projects } from "../../data/projects";
import { Star, GitFork, GitBranch, Briefcase, ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { githubProjects = [], customProjects = [] } = projects;

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* SECTION 1: GITHUB PROJECTS */}
      {githubProjects.length > 0 && (
        <div className="card bg-base-200 shadow-xl border border-base-content/5">
          <div className="card-body p-6 md:p-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3.5">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl shadow-inner">
                  <GitBranch size={22} className="animate-pulse" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-base-content tracking-tight">
                    GitHub Projects
                  </h3>
                  <div className="text-base-content/60 text-xs mt-0.5 font-medium">
                    Showcasing {githubProjects.length} featured repositories
                  </div>
                </div>
              </div>
            </div>

            {/* Repos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {githubProjects.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card shadow-sm border border-base-content/5 bg-base-100 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex justify-between flex-col p-6 h-full w-full gap-5">
                    <div>
                      {/* Name & Link Icon */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="card-title text-base tracking-wide flex text-base-content opacity-85 gap-2 font-bold group-hover:text-primary transition-colors truncate">
                          <Github className="w-4.5 h-4.5 text-primary flex-shrink-0" />
                          <span className="truncate">{repo.name}</span>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-base-content/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                      </div>
                      
                      {/* Description */}
                      <p className="mt-3 text-base-content/65 text-xs md:text-sm leading-relaxed font-normal">
                        {repo.description}
                      </p>
                    </div>

                    {/* Stats & Language */}
                    <div className="flex justify-between text-[11px] text-base-content/60 truncate mt-auto pt-3 border-t border-base-content/5">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-semibold hover:text-warning transition-colors">
                          <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                          <span>{repo.stars}</span>
                        </span>
                        <span className="flex items-center gap-1 font-semibold hover:text-primary transition-colors">
                          <GitFork className="w-3.5 h-3.5 text-primary" />
                          <span>{repo.forks}</span>
                        </span>
                      </div>
                      
                      {repo.language && (
                        <div>
                          <span className="flex items-center gap-1.5 font-semibold">
                            <span 
                              className="w-2.5 h-2.5 rounded-full inline-block shadow-inner"
                              style={{ backgroundColor: repo.languageColor || '#555' }}
                            />
                            <span>{repo.language}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* SECTION 2: CUSTOM PROJECTS */}
      {customProjects.length > 0 && (
        <div className="card bg-base-200 shadow-xl border border-base-content/5">
          <div className="card-body p-6 md:p-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div className="flex items-center space-x-3.5">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl shadow-inner">
                  <Briefcase size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-base-content tracking-tight">
                    My Projects
                  </h3>
                  <div className="text-base-content/60 text-xs mt-0.5 font-medium">
                    Showcasing {customProjects.length} live deployments
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {customProjects.map((project, index) => {
                const hasUrl = project.url && project.url.trim() !== "";
                const CardComponent = hasUrl ? 'a' : 'div';
                
                return (
                  <CardComponent
                    key={index}
                    href={hasUrl ? project.url : undefined}
                    target={hasUrl ? "_blank" : undefined}
                    rel={hasUrl ? "noreferrer" : undefined}
                    className={`card shadow-sm border border-base-content/5 bg-base-100 p-6 flex flex-col justify-between h-full transition-all duration-300 group ${
                      hasUrl ? 'hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div className="text-center w-full flex flex-col items-center gap-4">
                      {/* Title & External Icon */}
                      <div className="flex items-center justify-center gap-2 w-full">
                        <h2 className="font-bold text-base md:text-lg text-base-content group-hover:text-primary transition-colors">
                          {project.name}
                        </h2>
                        {hasUrl && <ExternalLink className="w-3.5 h-3.5 text-base-content/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                      </div>
                      
                      {/* Squircle Thumbnail */}
                      {project.thumbnail && (
                        <div className="avatar opacity-95 my-1">
                          <div className="w-20 h-20 mask mask-squircle shadow-md bg-base-200 border border-base-content/5 p-1 transition-transform duration-500 group-hover:scale-105">
                            <img alt={project.name} src={project.thumbnail} className="object-cover rounded-xl" />
                          </div>
                        </div>
                      )}
                      
                      {/* Description */}
                      <p className="text-base-content/65 text-xs md:text-sm leading-relaxed font-normal text-center">
                        {project.description}
                      </p>
                    </div>
                  </CardComponent>
                );
              })}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
