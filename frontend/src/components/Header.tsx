import logo from '../assets/logo.png'

export const Header = () => {
  return(
    <div className="relative h-20 flex items-center justify-center z-20 bg-dotbackground">
      {/* Endre på LOGO */}
      <img className="h-15" src={logo} alt="" />
    </div>
  )
}