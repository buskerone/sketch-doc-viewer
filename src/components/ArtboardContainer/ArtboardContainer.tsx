/**
 * Artboard container component
 *
 * @description Artboard container component that renders an image container with dynamic
 * height based on viewport
 * @author Carlos Knopel
 *
 * @returns React.FunctionComponent
 */

interface IArtboardContainerProps {
  artboardImageHeight: number;
  artboardName: string;
  artboardImageSrc: string;
}

const ArtboardContainer: React.FC<IArtboardContainerProps> = ({
  artboardImageHeight,
  artboardName,
  artboardImageSrc
}) => {
  return (
    <div
      id="artboard-main-container"
      className="w-full h-full flex flex-col justify-center items-center py-10"
    >
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

export default ArtboardContainer;
