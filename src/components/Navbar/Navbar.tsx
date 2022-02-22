import {
  SketchLogo,
  CloseIcon,
  Separator,
  ArrowRightIcon,
  ArrowLeftIcon,
  BreadcrumbIcon
} from 'assets';

/**
 * Navbar
 *
 * @description nav bar component that displays the name of the document/artboard,
 * it includes navigation through artboards and a "go back" button.
 * @author Carlos Knopel
 *
 * @returns React.Component
 */

interface INavbarProps {
  documentName: string;
  artboardId: number;
  artboardName: string;
  isArtboard: boolean;
  totalArtboards: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Navbar: React.FC<INavbarProps> = ({
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
          <button id="close-button" className="p-6" onClick={onClose}>
            <img alt="close" src={CloseIcon} />
          </button>

          <img className="mr-2 h-10" alt="separator" src={Separator} />

          <button id="prev-button" className="p-4" onClick={onPrev}>
            <img alt="arrow-left" src={ArrowLeftIcon} />
          </button>

          <span className="mr-2 text-gray-500">{artboardId}</span>

          <img className="mr-2" alt="breadcrumb" src={BreadcrumbIcon} />

          <span className="text-gray-500">{totalArtboards}</span>

          <button id="next-button" className="p-4" onClick={onNext}>
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

export default Navbar;
