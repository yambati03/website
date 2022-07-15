import Head from "next/head";
import ProjectCard from "../components/Projects/ProjectCard";
import coursify from "../public/coursify.png";

const projects = [
  {
    title: "Coursify",
    image: coursify,
    excerpt:
      "A platform for Georgia Tech students to track class seating updates in real time.",
    tags: ["react", "next", "firebase", "tailwind"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>
      <div className='m-8'>
        <div className='md:w-3/4 mx-auto space-y-4'>
          <h1 className='font-bold flex text-2xl'>Projects</h1>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              excerpt={project.excerpt}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
