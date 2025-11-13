import { myProjects as allProjects } from "../constants";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Project from "../types/ProjectType";
import searchProjects from "../utils";

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>(allProjects)

    const onSearch = (e: string) => {
        const filteredProjects = searchProjects(e, allProjects);
        setProjects(filteredProjects)
    }

    return (
        <section className="c-space my-20" id="projects" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="flex flex-col justify-start items-start gap-12">
          <div className="flex flex-col justify-start items-start gap-3">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text-main)' }}>Projects</h2>
            <div className="w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-soft) 0%, var(--accent-soft-alt) 100%)' }}></div>
          </div>
          <SearchBar placeholder="Tools/Name" onSearch={onSearch} className="" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 rounded-lg border flex flex-col gap-4 transition-all hover:scale-[1.02]"
            style={{
              background: 'radial-gradient(circle at top left, var(--bg-elevated) 0, var(--bg-elevated-soft) 50%, var(--bg-page) 140%)',
              borderColor: 'var(--border-subtle)'
            }}
          >
            <h3 className="text-xl font-semibold" style={{ color: 'var(--text-main)' }}>{project.title}</h3>
            <p className="text-base" style={{ color: 'var(--text-muted)' }}>{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.shownTools.map((tool, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    background: 'var(--chip-bg)',
                    border: '1px solid var(--chip-border)',
                    color: 'var(--text-soft)'
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
            <a 
              href={project.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline transition-colors"
              style={{ color: 'var(--accent-soft)' }}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
        </div>
      </section>
    )
};

export default Projects;