import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { NavBar } from '../components';

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;
  const isArtboard = pathname.includes("artboard");
  const { currentDocumentData, currentArtboardName } = useContext(AppContext);
  const { name: documentName } = currentDocumentData && currentDocumentData.share.version.document;

  return (
    <div className="h-screen w-full">
      <NavBar
        documentName={documentName}
        artboardName={currentArtboardName}
        isArtboard={isArtboard}
      />
      {children}
    </div>
  );
};

export default Layout;
