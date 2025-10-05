import { LinkButton } from "../components/LinkButton";
import wave from "../assets/wave.png";
import { Header } from "../components/Header";
import { AboutUsPage } from "./AboutUsPage";

export const HomePage = () => {
  return (
    <>
      <nav className="h-16 bg-white border-b border-black"></nav>

      <section className="h-[40vh] flex items-center justify-center border-y border-black mt-16">
        <div className="font-bold text-5xl">
          Helt nye karrieredager på NTNU den 3. mars
        </div>
      </section>

      {/* 3 boxes with countdown */}
      <section className="flex flex-col items-center gap-8 mt-16">
        <div className="flex flex-row justify-center items-center gap-2 ">
          <div className="flex flex-col items-center border-3 w-54 h-36 justify-center bg-dotgreen text-white border-black">
            <p className="text-4xl font-bold">148</p>
            <p>DAGER</p>
          </div>
          <div className="flex flex-col items-center border-3 w-54 h-36 justify-center bg-dotpurple text-white border-black">
            <p className="text-4xl font-bold">11</p>
            <p>TIMER</p>
          </div>
          <div className="flex flex-col items-center border-3 w-54 h-36 justify-center bg-dotyellow text-white border-black">
            <p className="text-4xl font-bold">23</p>
            <p>MINUTTER</p>
          </div>
        </div>
        <p>3. mars 2026 · Realfagsbygget U1, Gløshaugen</p>
      </section>
      <section className="flex flex-row items-center justify-center h-16"></section>
      <section className="flex flex-row items-center justify-center h-16 gap-8">
        <LinkButton link="/contact" color="green">
          Kontakt oss
        </LinkButton>
        <LinkButton link="/about" color="yellow">
          Les Mer
        </LinkButton>
      </section>
      <section>
        <div className="flex flex-row items-center justify-center gap-2 px-8 mt-16">
          <div className="w-full p-6 bg-dotpurple border-3 border-black flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-16 h-16 bg-white"></div>
            <p className="text-2xl">500+ STUDENTER</p>
            <p>Møt kvalifiserte kandidater innen IT og teknologi</p>
          </div>
          <div className="w-full p-6 bg-dotgreen border-3 border-black flex flex-col items-center justify-center gap-4 text-white">
            <div className="w-16 h-16 bg-white"></div>
            <p className="text-2xl">HELT NYTT</p>
            <p>Første dotDAGENE noensinne - vær med fra starten!</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center mt-16 gap-4">
          <h2 className="text-4xl font-medium">OPPDAG MULIGHETENE</h2>
          <p>
            dotDAGENE 2026 bringer sammen studenter og bedrifter gjennom en
            rekke aktiviteter og muligheter
          </p>
          <div className="flex flex-row w-full items-stretch justify-center gap-2 px-8 mt-16">
            <div className="w-full p-6 bg-dotgreen border-3 border-black flex flex-col gap-4 text-white">
              <div className="w-16 h-16 bg-white"></div>
              <p className="text-2xl">STANDS</p>
              <p>
                Få egen stand på dotDAGENE og møt direkte med
                informatikkstudenter. Perfekt mulighet til å rekruttere de beste
                talentene innen digitalisering og teknologi.
              </p>
              <LinkButton link="/contact" color="green">
                Legg til i kalender
              </LinkButton>
            </div>
            <div className="w-full p-6 bg-dotyellow border-3 border-black flex flex-col gap-4">
              <div className="w-16 h-16 bg-black"></div>
              <p className="text-2xl">PITCHEKVELD</p>
              <p>
                dotDAGENE inviterer til pitchekveld som avslutning på
                bedriftsdagen. Hver bedrift får 5-10 minutter til å presentere
                et spesifikt prosjekt eller teknologi - mer som en TedTalk enn
                en vanlig bedriftspresentasjon. Kvelden byr på konferansierer,
                drikkeservering og god stemning, etterfulgt av mingling med
                studentene.
              </p>
              <LinkButton link="/contact" color="green">
                Legg til i kalender
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
      <section className="my-32 mx-16">
        <div className="bg-white border-3 border-black w-full py-16 p-32 flex flex-col items-center justify-center gap-8">
          <h2 className="text-6xl font-medium">HVEM ER VI?</h2>
          <p className="text-center w-full px-48">
            NTNUs nyeste karrieredag innen digitalisering og teknologi.
            Arrangert av informatikkstudenter for å koble sammen fremtidens
            IT-talenter med bransjeledende bedrifter.
          </p>
        </div>
      </section>

      <section className="px-8">
        <div className="flex flex-row gap-2">
          <div className="border-3 bg-dotgreen border-black text-white p-6 w-full flex flex-col gap-4">
            <h3 className="text-3xl">KONTAKT DOTDAGENE</h3>
            <p>
              Vi arrangerer NTNUs nyeste karrieredag innen digitalisering og
              teknologi. Kontakt oss for å sikre din bedrift en plass på
              arrangementet.
            </p>
            <div className="bg-dotpurple border-3 border-black flex flex-row p-6">
              <div className="w-16">
                <div className="w-8 h-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>E-POST</p>
                <p>kontakt@dotdagene.no</p>
              </div>
            </div>
            <div className="bg-dotpurple border-3 border-black flex flex-row p-6">
              <div className="w-16">
                <div className="w-8 h-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>TELEFON</p>
                <p>+47 123 45 678</p>
              </div>
            </div>
            <div className="bg-dotpurple border-3 border-black flex flex-row p-6">
              <div className="w-16">
                <div className="w-8 h-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>DATO</p>
                <p>3. mars 2026</p>
              </div>
            </div>
            <div className="bg-dotpurple border-3 border-black flex flex-row p-6">
              <div className="w-16">
                <div className="w-8 h-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>LOKASJON</p>
                <p>Realfagsbygget U1 NTNU Gløshaugen, Trondheim</p>
              </div>
            </div>
            <div className="bg-dotpurple border-3 border-black flex flex-row p-6">
              <div className="w-16">
                <div className="w-8 h-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>MÅLGRUPPE</p>
                <p>500+ studenter ved nformatikk på NTNU</p>
              </div>
            </div>
          </div>
          <div className="border-3 bg-dotyellow border-black p-6 w-full flex flex-col gap-4">
            <h3 className="text-3xl">INTERESSEMELDING</h3>
            <p>
              Fyll ut skjemaet så tar vi kontakt for å diskutere
              standmuligheter.
            </p>
          </div>
        </div>
      </section>

      {/* <Header />
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
      <AboutUsPage /> */}
    </>
  );
};
