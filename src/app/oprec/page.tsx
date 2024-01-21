import Footer from "~/containers/footer";
import Navbar from "~/containers/navbar";
import OprecHero from "~/containers/oprec/hero";
import OprecInfo from "~/containers/oprec/info";
import OprecLocation from "~/containers/oprec/location";

export default function OprecPage() {
  return (
      <main className="overflow-hidden">
        <Navbar />
        <OprecHero />
        <OprecInfo/>
        <OprecLocation/>
        <Footer/>
      </main>
  );
}
