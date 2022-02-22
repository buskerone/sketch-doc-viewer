import { useLayoutEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from 'context/AppContext';
import { useWindowDimensions } from 'hooks';
import { useQuery } from '@apollo/client';
import { GET_DOCUMENT } from 'graphql/queries/document';
import { ArtboardContainer } from 'components';
import { Loader } from 'components';

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
  // Get artbaord and document id from URL
  const { documentId, artboardId } = useParams();

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
  const { loading, data } = useQuery(GET_DOCUMENT, {
    variables: {
      id: documentId
    }
  });

  // Effect to set document and artboard data when fetching graphql query
  useLayoutEffect(() => {
    if (data) {
      setCurrentDocumentData(data);
      setCurrentArtboard({
        id: parseInt(artboardId),
        name: data.share.version.document.artboards.entries[artboardId - 1].name,
        files: data.share.version.document.artboards.entries[artboardId - 1].files
      });
    }
  }, [data]);

  // Effect for artboard navigation
  useLayoutEffect(() => {
    if (currentDocumentData) {
      setCurrentArtboard({
        id: parseInt(artboardId),
        name: currentDocumentData?.share.version.document.artboards.entries[artboardId - 1].name,
        files: currentDocumentData?.share.version.document.artboards.entries[artboardId - 1].files
      });
    }
  }, [artboardId, currentDocumentData, setCurrentArtboard]);

  return (
    <div className="w-full h-full">
      {loading && <Loader />}
      <ArtboardContainer
        artboardImageHeight={artboardImageHeight}
        artboardName={currentArtboard?.name}
        artboardImageSrc={currentArtboard?.files[0].url}
      />
    </div>
  );
};

export default Artboard;
