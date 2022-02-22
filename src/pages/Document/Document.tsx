import { useLayoutEffect, useContext, Suspense, lazy } from 'react';
import AppContext from 'context/AppContext';
import { Loader, ErrorContainer } from 'components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_DOCUMENT } from 'graphql/queries/document';

const ThumbnailContainer = lazy(() => import('components/ThumbnailContainer'));

/**
 * Document
 *
 * @description document page where users can see all the artboards
 * @author Carlos Knopel
 *
 * @returns React.FunctionComponent
 */
const Document: React.FC = () => {
  // Get document id from URL
  const { documentId } = useParams();

  // Context
  const { currentDocumentData, setCurrentDocumentData } = useContext(AppContext);

  // Fetch data from graphql query
  const { error, loading, data } = useQuery(GET_DOCUMENT, {
    variables: {
      id: documentId
    }
  });

  // Save current document data
  useLayoutEffect(() => data && setCurrentDocumentData(data), [data, setCurrentDocumentData]);

  return (
    <div id="document-main-container" className="flex flex-col justify-center items-center py-8">
      {loading && <Loader />}
      {!error ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-20">
          <Suspense fallback={<Loader />}>
            {currentDocumentData &&
              currentDocumentData.share.version.document.artboards.entries.map(
                (artboard: any, key: number) => (
                  <ThumbnailContainer
                    key={key}
                    artboardId={key + 1}
                    artboardName={artboard.name}
                    artboardUrl={artboard.files[0].thumbnails[0].url}
                    documentId={documentId || ''}
                  />
                )
              )}
          </Suspense>
        </div>
      ) : (
        <ErrorContainer screen="Document" />
      )}
    </div>
  );
};

export default Document;
