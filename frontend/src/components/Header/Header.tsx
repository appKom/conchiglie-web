import { Link } from "react-router-dom";
import Logo from '../../assets/dotDAGENEhovedlogo.svg';
import { Bars3Icon } from "@heroicons/react/20/solid";
import type { Site } from "../../types";
import { Dropdown } from "./Dropdown";
import { useRef, useState } from "react";

const sites: Site[] = [
  {
    title: "Hjem",
    href: "/"
  }
]

export const Header = () => {
  const [menu, setMenu] = useState(false)
  const menuicon = useRef<HTMLButtonElement>(null)

  return (
    <header className="sticky top-0 z-50 bg-white">
      <section className="flex flex-row justify-between items-center border-b-2 p-4 xl:px-60 border-gray-500 ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-1/2" />
        </Link>
        <button 
          className="w-8 h-8 md:hidden"
          onClick={() => setMenu((prev) => !prev)}
          ref={menuicon}
        >
          <Bars3Icon/>
        </button>
        <nav className="hidden md:block">
          {sites.map((site) => {
            return(
              <Link 
                key={site.href}
                to={site.href}
                className="text-xl cursor-pointer hover:text-gray-700"
              >
                <section>{site.title}</section>
              </Link>
            )
          })}
        </nav>
      </section>
      
        {/* // Dropdown search menu */}
        <Dropdown
          isOpen={menu}
          onClose={() => setMenu(false)}
          site={sites} 
          triggerRef={menuicon}  
        />
    </header>
  );
  
};