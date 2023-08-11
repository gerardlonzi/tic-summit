import "./App.css";
import Barner from "./conponents/blocks-pages/barner";
import About from "./conponents/blocks-pages/about";
import Get from "./conponents/blocks-pages/get";
import Sponsor from "./conponents/blocks-pages/Sponsor";
import Stats from "./conponents/blocks-pages/Stats";
import Slide from "./conponents/blocks-pages/Slide";
import Insights from "./conponents/blocks-pages/Insgshits";
import Testimo from "./conponents/blocks-pages/Testimo";
import Startup from "./conponents/blocks-pages/Startup";
import Answer from "./conponents/blocks-pages/answer";
import Contact from "./conponents/blocks-pages/Contact";
import Footer from "./conponents/blocks-pages/footer";

function App() {

  return (
    <>
      <Barner />
      <Sponsor />
      <About />
      <Get />
      <Stats />
      <Slide />
      <Insights />
      <Testimo />
      <Startup />
      <Answer />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
