import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Import all images
import alien1 from '../assets/img/alien_1.271cb116.png';
import alien2 from '../assets/img/alien_2.fe9d8446.png';
import alien3 from '../assets/img/alien_3.15372712.png';
import alien4 from '../assets/img/alien_4.f7d8b053.png';

import ray1 from '../assets/img/rayTracer_1.ff896db9.png';
import ray2 from '../assets/img/rayTracer_2.491f8ddd.png';
import ray3 from '../assets/img/rayTracer_3.56009303.png';

import android1 from '../assets/img/android_1.c77d33db.png';
import android2 from '../assets/img/android_2.da7b0a0f.png';

import api1 from '../assets/img/RESTful_API.6bac6313.png';
import api2 from '../assets/img/RESTful_API_2.9123090d.png';
import api3 from '../assets/img/RESTful_API_3.0077a44c.png';

import rip1 from '../assets/img/RIPprotocal_1.738bb64a.png';
import rip2 from '../assets/img/RIPprotocal_2.b56cbf8c.png';
import rip3 from '../assets/img/RIPprotocal_3.750e8e2d.png';

import udp1 from '../assets/img/udp_1.742fc2af.png';
import udp2 from '../assets/img/udp_2.408dd720.png';
import udp3 from '../assets/img/udp_3.c8ddba87.png';

import sql1 from '../assets/img/sql_1.28b6f61e.png';
import sql2 from '../assets/img/sql_2.83b2eec2.png';
import sql3 from '../assets/img/sql_3.c2d73c83.png';

// Import videos
import alienVid from '../assets/video/alien.8df3796a.mp4';
import androidVid from '../assets/video/android_vid.4080d22a.mp4';

// Project Data
const projects = [
  {
    id: "alien-shooter",
    title: "Alien Shooter Game",
    tag: "Python / Pygame",
    desc: "A 2D Alien Shooter arcade game built using Python and Pygame. Features smooth player controls, shooting mechanics, automated enemy waves with increasing difficulty, score tracking, and custom sound effects. Developed as a practical project to apply object-oriented programming in Python.",
    media: [
      { type: 'video', src: alienVid },
      { type: 'image', src: alien1 },
      { type: 'image', src: alien2 },
      { type: 'image', src: alien3 },
      { type: 'image', src: alien4 }
    ]
  },
  {
    id: "ray-tracer",
    title: "C++ Ray Tracer",
    tag: "C++ / Computer Graphics",
    desc: "A high-performance CPU ray tracer implemented in C++. Features ray-sphere and ray-plane intersections, realistic lighting models (ambient, diffuse, specular), reflection, shadow casting, and camera transformations. Demonstrates advanced mathematical computations and clean C++ engineering.",
    media: [
      { type: 'image', src: ray1 },
      { type: 'image', src: ray2 },
      { type: 'image', src: ray3 }
    ]
  },
  {
    id: "android-app",
    title: "Android Utility Application",
    tag: "Java / Android SDK",
    desc: "A feature-rich Android mobile application written in Java. Features custom UI views, sqlite database integration, asynchronous task scheduling, local notifications, and device hardware sensor access. Designed to improve daily productivity and tasks.",
    media: [
      { type: 'video', src: androidVid },
      { type: 'image', src: android1 },
      { type: 'image', src: android2 }
    ]
  },
  {
    id: "rest-api",
    title: "RESTful API Backend",
    tag: "Node.js / Express / MongoDB",
    desc: "A secure and scalable RESTful API service built with Express.js and MongoDB. Supports JWT authentication, role-based access control, rich request validation, pagination, filtering, and thorough Swagger documentation. Ready for deployment with clean architectural design.",
    media: [
      { type: 'image', src: api1 },
      { type: 'image', src: api2 },
      { type: 'image', src: api3 }
    ]
  },
  {
    id: "rip-protocol",
    title: "RIP Protocol Simulation",
    tag: "C / Computer Networking",
    desc: "A simulation of the Routing Information Protocol (RIP) in C. Implements the distance-vector routing algorithm, periodic routing updates, split horizon with poison reverse to prevent routing loops, and dynamic network topology change handling. Tested under complex virtual network topologies.",
    media: [
      { type: 'image', src: rip1 },
      { type: 'image', src: rip2 },
      { type: 'image', src: rip3 }
    ]
  },
  {
    id: "udp-sockets",
    title: "UDP Client-Server Network",
    tag: "Java / Socket Programming",
    desc: "A reliable data transfer protocol simulation over UDP in Java. Implements custom window-based flow control (selective repeat/go-back-n), packet sequence numbering, checksum validation, timeout retransmissions, and artificial packet loss simulation.",
    media: [
      { type: 'image', src: udp1 },
      { type: 'image', src: udp2 },
      { type: 'image', src: udp3 }
    ]
  },
  {
    id: "sql-database",
    title: "Relational Database Management System",
    tag: "SQL / PostgreSQL",
    desc: "A relational database schema design and implementation for an enterprise e-commerce platform. Features complex SQL queries, transaction management, automated triggers, stored procedures, indexing for query optimization, and normalization up to 3NF.",
    media: [
      { type: 'image', src: sql1 },
      { type: 'image', src: sql2 },
      { type: 'image', src: sql3 }
    ]
  }
];

function ProjectCard({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? project.media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === project.media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = project.media[activeIndex];

  return (
    <div className="card project-card">
      <div className="project-body">
        <div className="project-meta">
          <span className="project-tag">{project.tag}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        
        <div className="showcase-container carousel">
          {currentMedia.type === 'video' ? (
            <video 
              src={currentMedia.src} 
              className="video-player" 
              controls 
              muted 
              preload="metadata"
            />
          ) : (
            <img 
              src={currentMedia.src} 
              alt={`${project.title} Screenshot ${activeIndex + 1}`} 
              className="project-image"
            />
          )}

          {project.media.length > 1 && (
            <>
              <button className="carousel-arrow prev" onClick={handlePrev} aria-label="Previous media">
                <ChevronLeft size={18} />
              </button>
              <button className="carousel-arrow next" onClick={handleNext} aria-label="Next media">
                <ChevronRight size={18} />
              </button>
              <div className="carousel-dots">
                {project.media.map((_, idx) => (
                  <button 
                    key={idx}
                    className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to media ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-view">
      <h2 className="section-header">My Featured Projects</h2>
      <hr />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
