import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const ArtboardContainer = ({ documentId, artboardId, artboardName, artboardUrl }) => {
  return (
    <Link className="focus:outline-none" to={`/document/${documentId}/artboard/${artboardId}`}>
      <div className="flex flex-col justify-center items-center">
        <img className="object-contain h-72 w-40 mb-4" alt={artboardName} src={artboardUrl} />
        <div className="text-sm">{artboardName}</div>
      </div>
    </Link>
  );
};

ArtboardContainer.propTypes = {
  documentId: PropTypes.number,
  artboardId: PropTypes.number,
  artboardName: PropTypes.string,
  artboardUrl: PropTypes.string
};

export default ArtboardContainer;
