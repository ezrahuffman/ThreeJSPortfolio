import Project from "../types/ProjectType";


export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
  ];

  
  export const myProjects: Project[] = [
    {
      title: 'TSP Genetic Algorithm',
      desc: 'This interactive dashboard allows you to solve arbitrary versions of the traveling salesman problem using a genetic algorithm.',
      subdesc:
        'Built using React & TypeScript for the frontend with Python, AsyncIO, and FastAPI on the backend.',
      href: 'https://geneticalgo.netlify.app/',
      texture: '/textures/project/project1.mp4',
      img: "",
      tools: ["Python", "TypeScript", "JavaScript", "TS", "JS", "Machine Learning", "ML", "FastAPI", "API", "NumPy"],
      shownTools: ["Python", "TypeScript", "JavaScript", "FastAPI", "NumPy", "Machine Learning"],
    },
    {
      title: 'Gladiator',
      desc: 'The Gladiator project is my attempt to make intelligent AI in a combat game using Unity AI agents.',
      subdesc:
        'Gladiator uses Unity AI agents to create intelligent enemies in a third-person video game using unsupervised training, self-play, and the torch library.',
      href: 'https://www.github.com/ezrahuffman/Gladiator',
      texture: '/textures/project/project2.mp4',
      img: "",
      tools: ["C#", "C Sharp", "Unity", "CSharp", "Machine Learning", "ML"],
      shownTools: ["C#","Unity", "Machine Learning"],
    },
    {
      title: 'Card Game',
      desc: 'Online card game made in Unity. ',
      subdesc:
        'This is a multi-player, online card game that I made in Unity using there online services, for saving player data, setting up a game server (also made in Unity), and networking (just the connectivity part, I wrote the data replication logic and such).',
      href: 'https://github.com/ezrahuffman/CardGame_Demo',
      texture: '/textures/project/project2.mp4',
      img: "",
      tools: ["C#", "C Sharp", "Unity", "CSharp", "Networking", "Online", "Multiplayer", "multi-player"],
      shownTools: ["C#","Unity", "Networking"],
    },
    {
      title: 'Static Site Generator',
      desc: 'A python project that takes markdown files and creates html pages based on the markdown files.',
      subdesc:
        'This is a multi-player, online card game that I made in Unity using there online services, for saving player data, setting up a game server (also made in Unity), and networking (just the connectivity part, I wrote the data replication logic and such).',
      href: 'https://github.com/ezrahuffman/StaticSiteGenerator',
      texture: '/textures/project/project2.mp4',
      img: "",
      tools: ["Python", "HTML", "Markdown", "md", "encoding", "generator"],
      shownTools: ["Python", "HTML", "Markdown"],
    },
    {
      title: 'FinSight',
      desc: 'Investments research platform being developed with another developer',
      subdesc:
        'This is an Investment research platform that I have been developing alongside one other developer using React, TypeScript, Python (FastAPI/AsyncIO), and SQL',
      href: 'https://github.com/jonahansmulcrone/FinSight',
      texture: '/textures/project/project2.mp4',
      img: "",
      tools: ["Python", "HTML", "CSS", "React", "TypeScript", "FastAPI", "SQL", "API", "javascript", "ts", "js"],
      shownTools: ["Python", "HTML", "CSS", "TypeScript", "SQL"],
    },
  ];
  
  export const calculateSizes = (isSmall:boolean, isMobile:boolean, isTablet:boolean) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Jack Henry',
      pos: 'Programmer Analyst II',
      duration: 'June 2024 - Present',
      title: "",
      icon: '/assets/JackHenryLogo.jpg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Amazon',
      pos: 'Software Development Engineer',
      duration: 'August 2022 - May 2023',
      title: "",
      icon: '/assets/amazon_logo400.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Game Sim (Marching Cube)',
      pos: 'Software Developer',
      duration: 'December 2021 - August 2022',
      title: "",
      icon: '/assets/gamesimlogo400.png',
      animation: 'salute',
    },
    {
      id: 4,
      name: 'NASA',
      pos: 'Software Developer Intern',
      duration: 'August 2020 - August 2021',
      title: "",
      icon: '/assets/NASA-Logo-Large.png',
      animation: 'salute',
    },
  ];