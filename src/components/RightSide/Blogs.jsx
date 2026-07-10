import React from 'react';
import { projects } from "../../data/projects";
import { BookOpen, FileText, ExternalLink } from "lucide-react";

export default function Blogs() {
  const { publications = [], blogs = [] } = projects;

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* SECTION 1: PUBLICATIONS */}
      {publications.length > 0 && (
        <div className="card bg-base-200 shadow-xl border border-base-content/5 w-full">
          <div className="card-body p-6 md:p-8">
            
            {/* Header */}
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl shadow-inner">
                <FileText size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-base-content tracking-tight">
                  Publications
                </h3>
                <div className="text-base-content/60 text-xs mt-0.5 font-medium">
                  Showcasing {publications.length} publications
                </div>
              </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {publications.map((pub, index) => {
                const hasUrl = pub.url && pub.url.trim() !== "";
                const CardWrapper = hasUrl ? 'a' : 'div';
                
                return (
                  <CardWrapper
                    key={index}
                    href={hasUrl ? pub.url : undefined}
                    target={hasUrl ? "_blank" : undefined}
                    rel={hasUrl ? "noreferrer" : undefined}
                    className={`card shadow-sm border border-base-content/5 bg-base-100 p-6 flex flex-col justify-between transition-all duration-300 group ${
                      hasUrl ? 'hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    <div className="w-full">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-bold opacity-85 text-base mb-1.5 text-base-content group-hover:text-primary transition-colors">
                          {pub.title}
                        </h4>
                        {hasUrl && <ExternalLink className="w-3.5 h-3.5 text-base-content/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />}
                      </div>
                      <p className="text-primary text-xs font-bold mb-1">
                        {pub.publisher}
                      </p>
                      <p className="text-base-content/50 text-[11px] italic mb-3">
                        Authors: {pub.authors}
                      </p>
                      <p className="text-base-content/65 text-xs md:text-sm leading-relaxed text-justify font-normal">
                        {pub.description}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

          </div>
        </div>
      )}

      {/* SECTION 2: ARTICLES / BLOG POSTS */}
      {blogs.length > 0 && (
        <div className="card bg-base-200 shadow-xl border border-base-content/5 w-full">
          <div className="card-body p-6 md:p-8">
            
            {/* Header */}
            <div className="flex items-center space-x-3.5 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-2xl shadow-inner">
                <BookOpen size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-base-content tracking-tight">
                  Recent Activities & Projects
                </h3>
                <div className="text-base-content/60 text-xs mt-0.5 font-medium">
                  Recent hackathons, bot scripts & experiments
                </div>
              </div>
            </div>

            {/* List */}
            <div className="grid grid-cols-1 gap-6">
              {blogs.map((blog, index) => {
                const hasUrl = blog.url && blog.url.trim() !== "";
                const CardWrapper = hasUrl ? 'a' : 'div';
                
                return (
                  <CardWrapper
                    key={index}
                    href={hasUrl ? blog.url : undefined}
                    target={hasUrl ? "_blank" : undefined}
                    rel={hasUrl ? "noreferrer" : undefined}
                    className={`card shadow-sm border border-base-content/5 bg-base-100 p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 group ${
                      hasUrl ? 'hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 cursor-pointer' : 'cursor-default'
                    }`}
                  >
                    {/* Thumbnail */}
                    {blog.thumbnail && (
                      <div className="avatar opacity-95 mb-4 md:mb-0">
                        <div className="w-20 h-20 mask mask-squircle bg-base-200 border border-base-content/5 p-1 transition-transform duration-500 group-hover:scale-105">
                          <img alt={blog.title} src={blog.thumbnail} className="object-cover rounded-xl" />
                        </div>
                      </div>
                    )}
                    
                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start gap-2 w-full mb-2">
                        <h4 className="font-bold opacity-85 text-base text-base-content group-hover:text-primary transition-colors">
                          {blog.title}
                        </h4>
                        {hasUrl && <ExternalLink className="w-3.5 h-3.5 text-base-content/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                      </div>
                      <p className="text-base-content/65 text-xs md:text-sm leading-relaxed font-normal">
                        {blog.description}
                      </p>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
