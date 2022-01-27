const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen">
      <nav className="w-full h-16 shadow-md">nav</nav>
      {children}
    </div>
  );
};

export default Layout;
