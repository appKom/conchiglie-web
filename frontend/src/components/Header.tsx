import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <div className="bg-dotbackground relative z-20 flex h-20 items-center justify-center">
      {/* Endre på LOGO */}
      <img className="h-15" src={logo} alt="" />
    </div>
  );
};
