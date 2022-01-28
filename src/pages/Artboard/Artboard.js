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
    setCurrentArtboardName
  } = useContext(AppContext);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doc = await request("https://graphql.sketch.cloud/api", getDocument, { // TODO: move url to env file
          id: documentId
        });

        setCurrentDocumentData(doc);
        setCurrentArtboardName(doc.share.version.document.artboards.entries[artboardId].name);
      } catch(e) {
        console.log(e);
      }
    }

    if (!currentDocumentData) {
      fetchDocument();
    } else {
      setCurrentArtboardName(currentDocumentData.share.version.document.artboards.entries[artboardId].name);
    }
  });

  return (
    <div className="w-full h-full flex justify-center items-center bg-[#F9F9F9] py-10">
      <img
        className="object-contain h-96 w-auto"
        alt={currentDocumentData && currentDocumentData.share.version.document.artboards.entries[artboardId].name}
        src={currentDocumentData && currentDocumentData.share.version.document.artboards.entries[artboardId].files[0].url}
      />
    </div>
  );
};

export default Artboard;
