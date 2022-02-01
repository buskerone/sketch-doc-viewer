import { PropTypes } from 'prop-types';
import {
  SketchLogo,
  CloseIcon,
  Separator,
  ArrowRightIcon,
  ArrowLeftIcon,
  BreadcrumbIcon
} from '../../assets';

/**
 * Navbar
 *
 * @description navbar component that displays the name of the document/artboard,
 * it includes navigation through artboards and a "go back" button.
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const Navbar = ({
  documentName,
  artboardId,
  artboardName,
  isArtboard,
  totalArtboards,
  onClose,
  onPrev,
  onNext
}) => (
  <nav className="z-50 flex justify-between items-center w-full h-16 py-6 shadow-md">
    {isArtboard ? (
      <>
        <div className="flex w-72 justify-start items-center">
          <button id="close-button" className="focus:outline-none p-6" onClick={onClose}>
            <img alt="close" src={CloseIcon} />
          </button>

          <img className="mr-2 h-10" alt="separator" src={Separator} />

          <button id="prev-button" className="focus:outline-none p-4" onClick={onPrev}>
            <img alt="arrow-left" src={ArrowLeftIcon} />
          </button>

          <span className="mr-2 text-gray-500">{artboardId}</span>

          <img className="mr-2" alt="breadcrumb" src={BreadcrumbIcon} />

          <span className="text-gray-500">{totalArtboards}</span>

          <button id="next-button" className="focus:outline-none p-4" onClick={onNext}>
            <img alt="arrow-right" src={ArrowRightIcon} />
          </button>
        </div>

        <div id="artboard-name" className="text-center">
          {artboardName}
        </div>

        <div className="flex w-72 justify-end items-center" />
      </>
    ) : (
      <div className="flex">
        <img className="ml-6 mr-6" alt="sketch" src={SketchLogo} />
        <span id="document-name">{documentName}</span>
      </div>
    )}
  </nav>
);

Navbar.propTypes = {
  documentName: PropTypes.string,
  artboardId: PropTypes.number,
  artboardName: PropTypes.string,
  isArtboard: PropTypes.bool,
  totalArtboards: PropTypes.number,
  onClose: PropTypes.func,
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};

export default Navbar;
