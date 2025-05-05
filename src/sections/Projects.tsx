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
        <div className="w-[1200px] bg-black-100 inline-flex flex-col justify-start items-start overflow-hidden" id="projects">
        <div className="self-stretch p-16 bg-black-100 flex flex-col justify-start items-start gap-12">
          <div data-align="Start" data-has-subheading="false" className="flex flex-col justify-start items-start gap-2">
            <div className="self-stretch justify-start text-white text-3xl font-semibold font-['Inter'] leading-7">Projects</div>
          </div>
          <SearchBar placeholder="Tools/Name" onSearch={onSearch} className="" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="p-6 bg-neutral-950 rounded-lg outline outline-1 outline-border-default flex flex-col gap-4"
          >
            <h3 className="text-white text-xl font-semibold">{project.title}</h3>
            <p className="text-white text-l font-regular">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.shownTools.map((tool, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-background-default rounded-full text-sm text-text-secondary"
                >
                  {tool}
                </span>
              ))}
            </div>
            <a 
              href={project.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-tertiary hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
        </div>
      </div>
    )
};

export default Projects;