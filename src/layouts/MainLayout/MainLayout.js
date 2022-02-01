import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { Navbar } from '../../components';

/**
 * Main Layout
 *
 * @description main layout component that renders the nav bar and a specific page
 * e.g document, artboard
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const isArtboard = pathname.includes('artboard');

  const { currentDocumentData, currentArtboard } = useContext(AppContext);

  const currentDocumentId = currentDocumentData?.share.identifier;
  const documentName = currentDocumentData?.share.version.document.name;
  const currentArtboardId = currentArtboard?.id || 0;
  const currentArtboardName = currentArtboard?.name;
  const artboards = currentDocumentData?.share.version.document.artboards;
  const totalArtboards = artboards?.entries.length || 0;

  const navigateThroughArtboards = (nav) => {
    let newArtboardId = currentArtboardId;

    if (nav === 'next') {
      if (currentArtboardId < totalArtboards) {
        newArtboardId++;
      }
    } else {
      if (currentArtboardId > 1) {
        newArtboardId--;
      }
    }

    navigate(`/document/${currentDocumentId}/artboard/${newArtboardId}`);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <Navbar
        documentName={documentName}
        artboardId={parseInt(currentArtboardId)}
        artboardName={currentArtboardName}
        totalArtboards={parseInt(totalArtboards)}
        isArtboard={isArtboard}
        onClose={() => navigate(`/document/${currentDocumentId}`)}
        onPrev={() => navigateThroughArtboards('prev')}
        onNext={() => navigateThroughArtboards('next')}
      />
      <div className="bg-[#F9F9F9] flex flex-grow justify-center items-center">{children}</div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
