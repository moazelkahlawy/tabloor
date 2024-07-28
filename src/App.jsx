import Contact from "./components/Contact/Contact";
import Details from "./components/Details/Details";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Steps from "./components/Steps/Steps";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Services />
      <Details />
      <Projects />
      <Feedback />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
