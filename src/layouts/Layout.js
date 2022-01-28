import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { NavBar } from '../components';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isArtboard = pathname.includes("artboard");

  const { currentDocumentData, currentArtboard } = useContext(AppContext);
  const { identifier: currentDocumentId } = currentDocumentData && currentDocumentData.share;
  const { name: documentName } = currentDocumentData && currentDocumentData.share.version.document;
  const { name: currentArtboardName, id: currentArtboardId } = currentArtboard;
  const { artboards } = currentDocumentData && currentDocumentData.share.version.document;
  const totalArtboards = currentDocumentData && artboards.entries.length;

  const navigateThroughArtboards = (nav) => {
    let newArtboardId = parseInt(currentArtboardId);

    if (nav === "next") {
      if (currentArtboardId < totalArtboards) {
        newArtboardId++;
      }
    } else {
      if (currentArtboardId > 1) {
        newArtboardId--;
      }
    }

    navigate(`/document/${currentDocumentId}/artboard/${newArtboardId}`);
  }

  return (
    <div className="h-screen w-full">
      <NavBar
        documentName={documentName}
        artboardId={currentArtboardId}
        artboardName={currentArtboardName}
        totalArtboards={totalArtboards}
        isArtboard={isArtboard}
        onClose={() => navigate(`/document/${currentDocumentId}`)}
        onPrev={() => navigateThroughArtboards("prev")}
        onNext={() => navigateThroughArtboards("next")}
      />
      <div className="bg-[#F9F9F9] h-full">
        {children}
      </div>
    </div>
  );
};

export default Layout;
