import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { NavBar } from '../components';

const Layout = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const isArtboard = pathname.includes("artboard");

  const { currentDocumentData, currentArtboard } = useContext(AppContext);
  const { name: documentName } = currentDocumentData && currentDocumentData.share.version.document;
  const { name: currentArtboardName, id: currentArtboardId } = currentArtboard;
  const { artboards } = currentDocumentData && currentDocumentData.share.version.document;
  const totalArtboards = currentDocumentData && artboards.entries.length;

  return (
    <div className="h-screen w-full">
      <NavBar
        documentName={documentName}
        artboardId={currentArtboardId}
        artboardName={currentArtboardName}
        totalArtboards={totalArtboards}
        isArtboard={isArtboard}
      />
      {children}
    </div>
  );
};

export default Layout;
