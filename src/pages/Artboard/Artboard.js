import { useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ArtboardContainer } from 'components';
import AppContext from 'context/AppContext';
import { useCallQuery, useWindowDimensions } from 'hooks';
import { getDocument } from 'graphql/queries/document';

/**
 * Artboard
 *
 * @description artboard page where users can see a specific artboard
 * @author Carlos Knopel
 *
 * @returns React.Component
 */

const viewportPadding = 144;

const Artboard = () => {
  // Get document id from URL
  const { pathname } = useLocation();
  const documentId = pathname.split('/')[2];

  // Get artbaord id from URL
  const { id: artboardId } = useParams();

  // App context
  const { currentDocumentData, setCurrentDocumentData, setCurrentArtboard, currentArtboard } =
    useContext(AppContext);

  // Get height of window
  const { height } = useWindowDimensions();

  // Calculate artboard image height
  const artboardImageHeight =
    currentArtboard?.files[0].height < height - viewportPadding
      ? currentArtboard?.files[0].height
      : height - viewportPadding;

  // Fetch data from graphql query
  const { response } = useCallQuery({
    query: getDocument,
    params: { id: documentId }
  });

  // Effect to set document and artboard data when fetching graphql query
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

  // Effect for artboard navigation
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
    <ArtboardContainer
      artboardImageHeight={artboardImageHeight}
      artboardName={currentArtboard?.name}
      artboardImageSrc={currentArtboard?.files[0].url}
    />
  );
};

export default Artboard;
