import sketchLogo from '../../assets/sketch-logo.svg';

const NavBar = () => (
  <nav className="flex justify-between items-center w-full h-16 px-8 shadow-md">
    <img alt="sketch" src={sketchLogo} />
  </nav>
);

export default NavBar;
