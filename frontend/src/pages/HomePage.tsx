import { LinkButton } from "../components/LinkButton";
import wave from "../assets/wave.png"

export const HomePage = () => {
  return(
    <div className="relative flex flex-col justify-center items-center content-between h-screen gap-12 font-sintony">
      <img 
        src={wave} 
        alt="wave background" 
        className="absolute right-0 top-0 w-1/3 object-cover z-0"
      />
      <p className="text-6xl pl-5 relative z-10">Helt nye karrieredager på <b>NTNU</b> <br /> fra <b>våren <br />2026</b></p>
      <p className="text-4xl italic relative z-10">Interessert?</p>
      <LinkButton link="https://online.ntnu.no/" color="green">Kontakt oss</LinkButton>
    </div>
  );
};