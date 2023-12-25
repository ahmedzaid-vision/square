import Hero from "./components/hero";
import Services from "./components/services";
import Projects from "./components/projects";
import Footer from "./components/footer";
import ClientSlider from "./components/clients";
import { Route, Routes } from "react-router-dom";
import layout from "./components/layout";
import Layout from "./components/layout";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Layout>
  );
}
export default App;








// <Hero />
// <Services />
// <Projects />
// <ClientSlider />
// <Footer />
