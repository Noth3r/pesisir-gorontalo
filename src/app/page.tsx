import Footer from "~/containers/footer";
import AboutUs from "~/containers/home/aboutUs";
import BeritaTerbaru from "~/containers/home/beritaTerbaru";
import Hero from "~/containers/home/hero";
import Logo from "~/containers/home/logo";
import Teaser from "~/containers/home/teaser";
import Navbar from "~/containers/navbar";

export default function HomePage() {
  return (
      <main>
        <Navbar />
        <Hero />
        <BeritaTerbaru />
        <Teaser />
        <AboutUs />
        <Logo />
        <Footer/>
      </main>
  );
}
