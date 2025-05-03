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
      logo: '/assets/dna-icon.png',
      img: "",
      tools: ["Python", "TypeScript", "JavaScript", "TS", "JS", "Machine Learning", "ML", "FastAPI", "API", "NumPy"],
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Python',
          path: 'assets/PythonLogo.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
      ],
    },
    {
      title: 'Gladiator',
      desc: 'The Gladiator project is my attempt to make intelligent AI in a combat game using Unity AI agents.',
      subdesc:
        'Gladiator uses Unity AI agents to create intelligent enemies in a third-person video game using unsupervised training, self-play, and the torch library.',
      href: 'https://www.github.com/ezrahuffman/Gladiator',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/crossed_swords.png',
      img: "",
      tools: ["C#", "C Sharp", "Unity", "CSharp", "Machine Learning", "ML"],
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'CSharp',
          path: '/assets/C_Sharp_Logo.svg',
        },
        {
          id: 2,
          name: 'Unity',
          path: 'assets/unity.svg',
        },
      ],
    },
    // {
    //   title: 'CarePulse - Health Management System',
    //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    //   subdesc:
    //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    //   texture: '/textures/project/project3.mp4',
    //   logo: '/assets/project-logo3.png',
    //   logoStyle: {
    //     backgroundColor: '#60f5a1',
    //     background:
    //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //     border: '0.2px solid rgba(208, 213, 221, 1)',
    //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    //   },
    //   spotlight: '/assets/spotlight3.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Horizon - Online Banking Platform',
    //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    //   subdesc:
    //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    //   texture: '/textures/project/project4.mp4',
    //   logo: '/assets/project-logo4.png',
    //   logoStyle: {
    //     backgroundColor: '#0E1F38',
    //     border: '0.2px solid #0E2D58',
    //     boxShadow: '0px 0px 60px 0px #2F67B64D',
    //   },
    //   spotlight: '/assets/spotlight4.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'Imaginify - AI Photo Manipulation App',
    //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    //   subdesc:
    //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    //   texture: '/textures/project/project5.mp4',
    //   logo: '/assets/project-logo5.png',
    //   logoStyle: {
    //     backgroundColor: '#1C1A43',
    //     border: '0.2px solid #252262',
    //     boxShadow: '0px 0px 60px 0px #635BFF4D',
    //   },
    //   spotlight: '/assets/spotlight5.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
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