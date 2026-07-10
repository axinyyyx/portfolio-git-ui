import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Certificates from './Certificates';
import Blogs from './Blogs';

export default function RightSide() {
  return (
    <main className="flex flex-col gap-6 w-full">
      {/* Hero Welcome Section */}
      {/* <Hero /> */}

      {/* Projects Showcase (GitHub & Custom) */}
      <Projects />

      {/* Experience Timeline */}
      <Experience />

      {/* Education Timeline */}
      <Education />

      {/* Certifications Timeline */}
      <Certificates />

      {/* Publications and Articles Section */}
      <Blogs />
    </main>
  );
}
