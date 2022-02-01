import { useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppContext from 'context/AppContext';
import useCallQuery from 'hooks/useCallQuery';
import { getDocument } from 'graphql/queries/document';

/**
 * Artboard
 *
 * @description artboard page where users can see a specific artboard
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const Artboard = () => {
  const { pathname } = useLocation();
  const documentId = pathname.split('/')[2];

  const { id: artboardId } = useParams();

  const { currentDocumentData, setCurrentDocumentData, setCurrentArtboard, currentArtboard } =
    useContext(AppContext);

  const { response } = useCallQuery({
    query: getDocument,
    params: { id: documentId }
  });

  useEffect(() => {
    if (response) {
      setCurrentDocumentData(response);
      setCurrentArtboard({
        id: parseInt(artboardId),
        name: response.share.version.document.artboards.entries[artboardId - 1].name,
        files: response.share.version.document.artboards.entries[artboardId - 1].files
      });
    }
  }, [response]);

  useEffect(() => {
    if (currentDocumentData) {
      setCurrentArtboard({
        id: parseInt(artboardId),
        name: currentDocumentData?.share.version.document.artboards.entries[artboardId - 1].name,
        files: currentDocumentData?.share.version.document.artboards.entries[artboardId - 1].files
      });
    }
  }, [artboardId, currentDocumentData, setCurrentArtboard]);

  return (
    <div
      id="artboard-main-container"
      className="w-full h-full flex justify-center items-center py-10">
      <img
        id="artboard-image"
        className="object-contain h-96 w-auto"
        alt={currentArtboard?.name}
        src={currentArtboard?.files[0].url}
      />
    </div>
  );
};

export default Artboard;
