import Home from "@/modules/Home/Home";
import About from "@/modules/About/About";
import Services from "@/modules/Services/Services";
import Work from "@/modules/Work/Work";
import Contact from "@/modules/Contact/Contact";

export default function Page() {
  return (
    <div className="flex flex-col w-full">
      <section id="home" className="relative">
        <Home />
      </section>
      <section id="about" className="relative">
        <About />
      </section>
      <section id="services" className="relative">
        <Services />
      </section>
      <section id="work" className="relative">
        <Work />
      </section>
      <section id="contact" className="relative">
        <Contact />
      </section>
    </div>
  );
}
