import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { NavBar } from '../components';

const Layout = ({ children }) => {
  const { currentDocumentData } = useContext(AppContext);
  const { name: documentName } = currentDocumentData && currentDocumentData.share.version.document;

  return (
    <div className="h-screen w-full">
      <NavBar documentName={documentName} isArtboard={false} />
      {children}
    </div>
  );
};

export default Layout;
