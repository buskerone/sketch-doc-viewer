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
  })

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h1 className="text-2xl mb-2">Document id: {id}</h1>
      <div className="grid grid-cols-4 gap-2">
        {documentData &&
          documentData.share.version.document.artboards.entries.map((artboard, key) => (
            <Link key={key} to={`/artboard/${key}`}>
              <div className="bg-blue-100 rounded-xl p-4">{artboard.name}</div>
            </Link>
          ))

        }
      </div>
    </div>
  );
};

export default Document;
