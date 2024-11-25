import "../App.css";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Cont from "../components/Cont";
import Cards from "../components/Cards";
import Raineffect from "../components/Raineffect";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <>
      <main>
        <Raineffect />
        <Navbar />
        <Hero />
      </main>
      <footer>
        <Cont />
        <Cards />
        <Footer />
      </footer>
    </>
  );
}

export default Homepage;
