import { NavBar } from '../components';

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
