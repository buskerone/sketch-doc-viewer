import { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ArtboardContainer } from '../../components';
import { useParams } from 'react-router-dom';
import request from 'graphql-request';
import { getDocument } from '../../graphql/queries/document';

const Document = () => {
  const { id } = useParams();
  const { currentDocumentData, setCurrentDocumentData } = useContext(AppContext);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doc = await request("https://graphql.sketch.cloud/api", getDocument, { // TODO: move url to env file
          id
        });

        setCurrentDocumentData(doc);
      } catch(e) {
        console.log(e);
      }
    }

    fetchDocument();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-20">
        {currentDocumentData &&
          currentDocumentData.share.version.document.artboards.entries.map((artboard, key) => (
            <ArtboardContainer
              key={key}
              artboardId={key + 1}
              artboardName={artboard.name}
              artboardUrl={artboard.files[0].thumbnails[0].url}
              documentId={id}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Document;
