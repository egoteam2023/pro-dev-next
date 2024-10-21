import About from "@/layouts/About";
import Cases from "@/layouts/Cases";
import Feetback from "@/layouts/Feedback";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Home from "@/layouts/Home";
import Services from "@/layouts/Services";
import Team from "@/layouts/Team";

export default async function HomePage() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Home />
        <div className="br"></div>
        <About />
        <div className="br"></div>
        <Team />
        <div className="br"></div>
        <Services />
        <div className="br"></div>
        <Cases />
        <div className="br"></div>
        <Feetback />
        <div className="br"></div>
      </main>
      <Footer />
    </div>
  );
}
