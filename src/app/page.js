import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Howto from "@/components/howto";
import Introduce from "@/components/introduce";
import LocalProducts from "@/components/localProducts";
import Navigation from "@/components/navigation";
import PilotniProdejna from "@/components/pilotniProdejna";
import Recenze from "@/components/recenze";
import Spolupracujeme from "@/components/spolupracujeme";
import Timeline from "@/components/timeline";
import Tym from "@/components/tym";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* </header> */}
      <div className="pt-0 sm:pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32">
        <Introduce />
        <LocalProducts />
      </div>
      <div
        className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32 bg-jarvisBg "
        id="kde"
      >
        <PilotniProdejna />
      </div>
      <div className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32" id="jak">
        <Howto />
      </div>
      <div
        className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32 bg-jarvisBg "
        id="spolupracujeme"
      >
        <Spolupracujeme />
      </div>
      <div className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32">
        {/* <Recenze /> */}
        <Timeline />
      </div>

      <div
        className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32 bg-jarvisBg "
        id="kdo"
      >
        <Tym />
      </div>
      <div
        className="pt-12 pb-12 md:pt-20 md:pb-20 lg:pt-32 lg:pb-32"
        id="kontakt"
      >
        <Contact />
      </div>
    </main>
  );
}
