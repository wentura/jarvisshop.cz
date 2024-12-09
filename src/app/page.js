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
      <div className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44">
        <Introduce />
        <LocalProducts />
      </div>
      <div
        className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44 bg-jarvisBg "
        id="kde"
      >
        <PilotniProdejna />
      </div>
      <div className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44" id="jak">
        <Howto />
      </div>
      <div
        className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44 bg-jarvisBg "
        id="spolupracujeme"
      >
        <Spolupracujeme />
      </div>
      <div className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44">
        <Recenze />
      </div>
      <div
        className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44 bg-jarvisBg "
        id="kdo"
      >
        <Tym />
      </div>
      <div
        className="pt-24 pb-24 md:pt-32 md:pb-24 lg:pt-44 lg:pb-44"
        id="kontakt"
      >
        <Contact />
      </div>
    </main>
  );
}
