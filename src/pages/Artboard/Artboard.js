import { useEffect, useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import request from 'graphql-request';
import { getDocument } from '../../graphql/queries/document';

const Artboard = () => {
  const { pathname } = useLocation();
  const documentId = pathname.split("/")[2];

  const { id: artboardId } = useParams();

  const {
    currentDocumentData,
    setCurrentDocumentData,
    setCurrentArtboard,
    currentArtboard
  } = useContext(AppContext);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doc = await request("https://graphql.sketch.cloud/api", getDocument, { // TODO: move url to env file
          id: documentId
        });

        setCurrentDocumentData(doc);
        setCurrentArtboard(
          {
            id: parseInt(artboardId) + 1,
            name: doc.share.version.document.artboards.entries[artboardId].name,
            files: doc.share.version.document.artboards.entries[artboardId].files
          }
        );
      } catch(e) {
        console.log(e);
      }
    }

    if (!currentDocumentData) {
      fetchDocument();
    } else {
      setCurrentArtboard(
        {
          id: parseInt(artboardId) + 1,
          name: currentDocumentData.share.version.document.artboards.entries[artboardId].name,
          files: currentDocumentData.share.version.document.artboards.entries[artboardId].files
        }
      );
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#F9F9F9] py-10">
      <img
        className="object-contain h-96 w-auto"
        alt={currentArtboard && currentArtboard.name}
        src={currentArtboard && currentArtboard.files[0].url}
      />
    </div>
  );
};

export default Artboard;
