import sketchLogo from '../../assets/sketch-logo.svg';

const NavBar = ({ documentName }) => (
  <nav className="flex justify-between items-center w-full h-16 px-8 shadow-md">
    <div className="flex">
      <img className="mr-6" alt="sketch" src={sketchLogo} />
      <span>{documentName}</span>
    </div>
  </nav>
);

export default NavBar;
