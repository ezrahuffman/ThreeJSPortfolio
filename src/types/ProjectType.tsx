type Project = {
    title: string;
    tools: string[];
    href: string;
    img: string;
    desc: string;
    subdesc:string;
    texture: string;
    logo: string;
    logoStyle: {
        backgroundColor: string;
        border: string;
        boxShadow: string;
    };
    spotlight: string;
    tags: any[];
};

export default Project;