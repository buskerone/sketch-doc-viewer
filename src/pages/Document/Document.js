import { useEffect, useContext, Suspense, lazy } from 'react';
import AppContext from '../../context/AppContext';
import { Loader } from '../../components';
import { useParams } from 'react-router-dom';
import useCallQuery from '../../hooks/useCallQuery';
import { getDocument } from '../../graphql/queries/document';

const ArtboardContainer = lazy(() => import('../../components/ArtboardContainer'));

/**
 * Document
 *
 * @description document page where users can see all the artboards
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const Document = () => {
  const { id } = useParams();
  const { currentDocumentData, setCurrentDocumentData } = useContext(AppContext);

  const { response } = useCallQuery({
    query: getDocument,
    params: { id }
  });

  useEffect(() => {
    if (response !== null) {
      setCurrentDocumentData(response);
    }
  }, [response]);

  return (
    <div id="document-main-container" className="flex flex-col justify-center items-center py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-20">
        <Suspense fallback={<Loader />}>
          {currentDocumentData &&
            currentDocumentData.share.version.document.artboards.entries.map((artboard, key) => (
              <ArtboardContainer
                key={key}
                artboardId={key + 1}
                artboardName={artboard.name}
                artboardUrl={artboard.files[0].thumbnails[0].url}
                documentId={id}
              />
            ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Document;
