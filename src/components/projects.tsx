import Slider from "./slider";
const Projects = () => {
  const projects = [
    {
      src: "/projects/p1.jpg",
      text: "Cook Factory- Ismalia City",
    },
    {
      src: "/projects/p2.jpg",
      text: "Food Factory Mezzanine- Alexandria",
    },
    {
      src: "/projects/p3.jpg",
      text: "Generators Shed- Hurghada",
    },
    {
      src: "/projects/p4.jpg",
      text: "Glass Factory- 10th Pf Ramadan City",
    },
    {
      src: "/projects/p5.jpg",
      text: "Machine Shed- Dameyita",
    },
    {
      src: "/projects/p6.jpg",
      text: "Air Conditioner Factory- 10th Of Ramadan City",
    },
    {
      src: "/projects/p7.jpg",
      text: "Bracing Modification- Car Assembley Factory",
    },
    {
      src: "/projects/p8.jpg",
      text: "Boiler Shed-10th Of Ramadan City",
    },
    {
      src: "/projects/p9.jpg",
      text: "Checmical Processing Unit Shed- Aswan",
    },
    {
      src: "/projects/p10.jpg",
      text: "Glass Factory- 10th Pf Ramadan City",
    },
  ];

  return (
    <div
      className="py-12 px-8"
      id="projects"
      style={{
        backgroundImage: `url('/projects/projects-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto w-full  md:w-[90%] ">
        <h2 className="text-xl  mb-4 pb-2 text-white text-center ">
          Latest Projects
        </h2>
        <div className="w-[13%] h-[2px] bg-white mx-auto"></div>

        <div className=" mt-8 flex flex-wrap gap-7 justify-center">
          <Slider projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;


