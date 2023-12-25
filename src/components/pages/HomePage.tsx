import Clients from "../clients";
import Hero from "../hero";
import Projects from "../projects";
import Services from "../services";

function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Clients />
    </div>
  );
}

export default HomePage;
