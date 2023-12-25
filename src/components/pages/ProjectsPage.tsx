import projects from "../../../public/data/projects.json";
import ProjecSlider from "../projectSlider";


const Project = ({ project }) => {
  return (
    <div className="project w-full flex items-center flex-col  ">
      <h3 className="w-fit font-bold mb-3 ">{project.title}</h3>
      <div className="project-images  w-full">
        <ProjecSlider images={project.images} />
      </div>
    </div>
  );
};

function ProjectsPage() {
  return (
    <div className="projects mt-40 mb-10 mx-8 ">
      <div className="container mx-auto   ">
        <div className="flex flex-wrap justify-center gap-20 ">
          {projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;


