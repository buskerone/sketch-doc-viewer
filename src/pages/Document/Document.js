import { useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { useParams, Link } from 'react-router-dom';
import request from 'graphql-request';
import { getDocument } from '../../graphql/queries/document';

const Document = () => {
  const { id } = useParams();
  const { currentDocumentData, setCurrentDocumentData } = useContext(AppContext);

  const fetchDocument = async () => {
    try {
      const doc = await request("https://graphql.sketch.cloud/api", getDocument, { // TODO: move url to env file
        id
      })

      setCurrentDocumentData(doc);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchDocument()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-6 md:gap-8 lg:gap-16 xl:gap-20">
        {currentDocumentData &&
          currentDocumentData.share.version.document.artboards.entries.map((artboard, key) => (
            <Link key={key} to={`/artboard/${key}`}>
              <div className="flex flex-col justify-center items-center">
                <img
                  className="object-contain h-72 w-40 mb-4"
                  alt={artboard.name}
                  src={artboard.files[0].thumbnails[0].url}
                />
                <div className="text-sm">{artboard.name}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Document;
