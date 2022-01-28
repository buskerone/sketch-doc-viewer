import sketchLogo from '../assets/sketch-logo.svg';

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <nav className="flex justify-between items-center w-full h-16 px-8 shadow-md">
        <img alt="sketch" src={sketchLogo} />
      </nav>
      {children}
    </div>
  );
};

export default Layout;
