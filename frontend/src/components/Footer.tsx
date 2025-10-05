import Logo from "../assets/dotDAGENEhovedlogo.svg"
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import Facebook from "../assets/facebook.svg"

const a_className = "text-gray-600 hover:text-black"

export const Footer = () => {
  return(
    <footer className="flex border-t-3 justify-center mt-20">
      <section className="flex flex-col md:flex-row md:flex-wrap w-full m-8 mt-12 gap-2 md:gap-8 justify-around">
        <section>
          <img src={Logo} alt="Logo" className="w-1/3 md:mb-4" />
          <p className="w-3/4 mb-5 text-gray-600 md:text-xl md:w-4/5">NTNUs nyeste karrieredag innen digitalisering og teknologi.</p>
        </section>
        <section className="flex flex-col md:text-xl">
          <h2 className="text-lg md:text-2xl">Hurtiglenker</h2>
          <a className={a_className} href="">Hjem</a>
          <a className={a_className} href="">Om oss</a>
          <a className={a_className} href="">Kontakt oss</a>
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="text-lg md:text-2xl">Følg oss</h2>
          <section className="flex gap-3">
          <a href="https://www.instagram.com/dotdagene/"><img src={Instagram}/></a>
          <a href=""><img src={Linkedin}/></a>
          <a href=""><img src={Facebook}/></a>
          </section>
        </section>
        <p className="mt-6 pt-6 border-t-1 border-gray-300 text-gray-500 text-center w-full">© 2025 dotDAGENE</p>
      </section>
    </footer>
  )
}