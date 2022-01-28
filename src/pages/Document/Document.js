import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import request from 'graphql-request';
import { getDocument } from '../../graphql/queries/document';

const Document = () => {
  const { id } = useParams();
  const [documentData, setDocumentData] = useState(null);

  const fetchDocument = async () => {
    try {
      const doc = await request("https://graphql.sketch.cloud/api", getDocument, { // TODO: move url to env file
        id
      })

      setDocumentData(doc);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchDocument()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h1 className="text-2xl mb-2">Document id: {id}</h1>
      <div className="grid grid-cols-5 gap-10">
        {documentData &&
          documentData.share.version.document.artboards.entries.map((artboard, key) => (
            <Link key={key} to={`/artboard/${key}`}>
              <div className="flex flex-col justify-center items-center">
                <img alt={artboard.name} src={artboard.files[0].thumbnails[0].url} />
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
