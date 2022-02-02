import { PropTypes } from 'prop-types';

/**
 * Artboard container component
 *
 * @description Artboard container component that renders an image container with dynamic
 * height based on viewport
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const ArtboardContainer = ({ artboardImageHeight, artboardName, artboardImageSrc }) => {
  return (
    <div
      id="artboard-main-container"
      className="w-full h-full flex flex-col justify-center items-center py-10">
      <img
        id="artboard-image"
        style={{
          width: 'auto',
          height: artboardImageHeight
        }}
        alt={artboardName}
        src={artboardImageSrc}
      />
    </div>
  );
};

ArtboardContainer.propTypes = {
  artboardImageHeight: PropTypes.number,
  artboardName: PropTypes.string,
  artboardImageSrc: PropTypes.string
};

export default ArtboardContainer;
