import logo from '../assets/logo.png'

export const Header = () => {
  return(
    <div className="h-20 flex items-center justify-center">
      {/* Endre på LOGO */}
      <img className="h-15" src={logo} alt="" />
    </div>
  )
}