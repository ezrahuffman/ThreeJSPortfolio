
import Project from './types/ProjectType'

const searchProjects = (target: string, projects: Project[]) => {
// Return all projects if target is empty
if (!target || target.trim() === '') {
    return projects;
}

const targetLower = target.toLowerCase();

// Search by title
const titleMatches = projects.filter((proj) => 
    proj.title.toLowerCase().startsWith(targetLower)
);

// Search by tools
const toolMatches = projects.filter((proj) => 
    proj.tools.some(tool => tool.toLowerCase().startsWith(targetLower))
);

// Combine results and remove duplicates
const allMatches = [...titleMatches];

// Add tool matches that aren't already in the title matches
toolMatches.forEach(project => {
    if (!allMatches.some(p => p.title === project.title)) {
    allMatches.push(project);
    }
});

return allMatches;
};

export default searchProjects;