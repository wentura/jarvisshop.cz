import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Howto from "@/components/howto";
import Introduce from "@/components/introduce";
import LocalProducts from "@/components/localProducts";
import Navigation from "@/components/navigation";
import PilotniProdejna from "@/components/pilotniProdejna";
import Recenze from "@/components/recenze";
import Spolupracujeme from "@/components/spolupracujeme";
import Tym from "@/components/tym";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* <header className="flex flex-col-reverse md:flex-col"> */}
      <Hero />
      <Navigation />
      {/* </header> */}
      <Introduce />
      <LocalProducts />
      <PilotniProdejna />
      <Howto />
      <Spolupracujeme />
      <Recenze />
      <Tym />
      <Contact />
    </main>
  );
}
