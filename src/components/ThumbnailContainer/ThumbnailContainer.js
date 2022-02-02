import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Thumbnail Container component
 *
 * @description thumbnail container component that renders an image with a link so
 * users can navigate to a specific artboard
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const ThumbnailContainer = ({ documentId, artboardId, artboardName, artboardUrl }) => {
  return (
    <Link
      id="artboard-container"
      className="focus:outline-none"
      to={`/document/${documentId}/artboard/${artboardId}`}>
      <div className="flex flex-col justify-center items-center">
        <img className="object-contain h-72 w-40 mb-4" alt={artboardName} src={artboardUrl} />
        <div className="text-sm">{artboardName}</div>
      </div>
    </Link>
  );
};

ThumbnailContainer.propTypes = {
  documentId: PropTypes.string,
  artboardId: PropTypes.number,
  artboardName: PropTypes.string,
  artboardUrl: PropTypes.string
};

export default ThumbnailContainer;
