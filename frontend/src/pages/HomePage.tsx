import { LinkButton } from '../components/LinkButton';
import wave from '../assets/wave.png';
import { Header } from '../components/Header';
import { AboutUsPage } from './AboutUsPage';
import { ContactForm } from '../components/HomePage/ContactForm';

export const HomePage = () => {
  return (
    <>
      <nav className="h-16 border-b border-black bg-white"></nav>

      <section className="mt-16 flex h-[40vh] items-center justify-center border-y border-black">
        <div className="text-5xl font-bold">
          Helt nye karrieredager på NTNU den 3. mars
        </div>
      </section>

      {/* 3 boxes with countdown */}
      <section className="mt-16 flex flex-col items-center gap-8">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="bg-dotgreen flex h-36 w-54 flex-col items-center justify-center border-3 border-black text-white">
            <p className="text-4xl font-bold">148</p>
            <p>DAGER</p>
          </div>
          <div className="bg-dotpurple flex h-36 w-54 flex-col items-center justify-center border-3 border-black text-white">
            <p className="text-4xl font-bold">11</p>
            <p>TIMER</p>
          </div>
          <div className="bg-dotyellow flex h-36 w-54 flex-col items-center justify-center border-3 border-black text-white">
            <p className="text-4xl font-bold">23</p>
            <p>MINUTTER</p>
          </div>
        </div>
        <p>3. mars 2026 · Realfagsbygget U1, Gløshaugen</p>
      </section>
      <section className="flex h-16 flex-row items-center justify-center"></section>
      <section className="flex h-16 flex-row items-center justify-center gap-8">
        <LinkButton link="/contact" color="green">
          Kontakt oss
        </LinkButton>
        <LinkButton link="/about" color="yellow">
          Les Mer
        </LinkButton>
      </section>
      <section>
        <div className="mt-16 flex flex-row items-center justify-center gap-2 px-8">
          <div className="bg-dotpurple flex w-full flex-col items-center justify-center gap-4 border-3 border-black p-6 text-white">
            <div className="h-16 w-16 bg-white"></div>
            <p className="text-2xl">500+ STUDENTER</p>
            <p>Møt kvalifiserte kandidater innen IT og teknologi</p>
          </div>
          <div className="bg-dotgreen flex w-full flex-col items-center justify-center gap-4 border-3 border-black p-6 text-white">
            <div className="h-16 w-16 bg-white"></div>
            <p className="text-2xl">HELT NYTT</p>
            <p>Første dotDAGENE noensinne - vær med fra starten!</p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-16 flex flex-col items-center gap-4">
          <h2 className="text-4xl font-medium">OPPDAG MULIGHETENE</h2>
          <p>
            dotDAGENE 2026 bringer sammen studenter og bedrifter gjennom en
            rekke aktiviteter og muligheter
          </p>
          <div className="mt-16 flex w-full flex-row items-stretch justify-center gap-2 px-8">
            <div className="bg-dotgreen flex w-full flex-col gap-4 border-3 border-black p-6 text-white">
              <div className="h-16 w-16 bg-white"></div>
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
            <div className="bg-dotyellow flex w-full flex-col gap-4 border-3 border-black p-6">
              <div className="h-16 w-16 bg-black"></div>
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
      <section className="mx-16 my-32">
        <div className="flex w-full flex-col items-center justify-center gap-8 border-3 border-black bg-white p-32 py-16">
          <h2 className="text-6xl font-medium">HVEM ER VI?</h2>
          <p className="w-full px-48 text-center">
            NTNUs nyeste karrieredag innen digitalisering og teknologi.
            Arrangert av informatikkstudenter for å koble sammen fremtidens
            IT-talenter med bransjeledende bedrifter.
          </p>
        </div>
      </section>

      <section className="px-8">
        <div className="flex flex-row gap-2">
          <div className="bg-dotgreen flex w-full flex-col gap-4 border-3 border-black p-6 text-white">
            <h3 className="text-3xl">KONTAKT DOTDAGENE</h3>
            <p>
              Vi arrangerer NTNUs nyeste karrieredag innen digitalisering og
              teknologi. Kontakt oss for å sikre din bedrift en plass på
              arrangementet.
            </p>
            <div className="bg-dotpurple flex flex-row border-3 border-black p-6">
              <div className="w-16">
                <div className="h-8 w-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>E-POST</p>
                <p>kontakt@dotdagene.no</p>
              </div>
            </div>
            <div className="bg-dotpurple flex flex-row border-3 border-black p-6">
              <div className="w-16">
                <div className="h-8 w-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>TELEFON</p>
                <p>+47 123 45 678</p>
              </div>
            </div>
            <div className="bg-dotpurple flex flex-row border-3 border-black p-6">
              <div className="w-16">
                <div className="h-8 w-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>DATO</p>
                <p>3. mars 2026</p>
              </div>
            </div>
            <div className="bg-dotpurple flex flex-row border-3 border-black p-6">
              <div className="w-16">
                <div className="h-8 w-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>LOKASJON</p>
                <p>Realfagsbygget U1 NTNU Gløshaugen, Trondheim</p>
              </div>
            </div>
            <div className="bg-dotpurple flex flex-row border-3 border-black p-6">
              <div className="w-16">
                <div className="h-8 w-8 bg-white"></div>
              </div>
              <div className="flex flex-col">
                <p>MÅLGRUPPE</p>
                <p>500+ studenter ved nformatikk på NTNU</p>
              </div>
            </div>
          </div>
          <div className="bg-dotyellow flex w-full flex-col gap-4 border-3 border-black p-8">
            <h3 className="text-3xl">INTERESSEMELDING</h3>
            <p>
              Fyll ut skjemaet så tar vi kontakt for å diskutere
              standmuligheter.
            </p>
            <ContactForm />
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
