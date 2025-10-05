import { LinkButton } from "../components/LinkButton";
import wave from "../assets/wave.png";
import { Header } from "../components/Header";
import { AboutUsPage } from "./AboutUsPage";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className="relative flex flex-col justify-center items-center content-between h-screen gap-12">
        <img
          src={wave}
          alt="wave background"
          className="absolute right-0 top-0 w-1/3 object-cover z-0 md:w-1/6"
        />
        <p className="text-6xl pl-5 relative z-10 md:text-center md:p-0 md:text-7xl">
          Helt nye karrieredager på <b>NTNU</b> <br /> fra{" "}
          <b>
            våren <br />
            2026
          </b>
        </p>
        <p className="text-4xl italic relative z-10 md:text-5xl">
          Interessert?
        </p>
        <LinkButton link="/contact" color="green">
          Kontakt oss
        </LinkButton>
      </div>
      <AboutUsPage />
      <Footer />
    </>
  );
};
