import { Footer } from "./layout/Footer.tsx";
import { Header } from "./layout/Header.tsx";
import About from "./sections/About.tsx";
import Experience from "./sections/Experience.tsx";
import Projects from "./sections/Projects.tsx";
import Contact from "./sections/Contact.tsx";
import ScrollToTop from "./ui/ScrollToTop.tsx";

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
