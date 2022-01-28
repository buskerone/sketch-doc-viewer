import {
  SketchLogo,
  CloseIcon,
  Separator,
  ArrowRightIcon,
  ArrowLeftIcon,
  BreadcrumbIcon
} from '../../assets';

const NavBar = ({
  documentName,
  artboardId,
  artboardName,
  isArtboard,
  totalArtboards,
  onClose,
  onPrev,
  onNext
}) => (
  <nav className="flex justify-between items-center w-full h-16 shadow-md">
    {isArtboard ?
      <>
        <div className="flex w-72 justify-start items-center">
          <button className="p-6" onClick={onClose}>
            <img alt="close" src={CloseIcon} />
          </button>

          <img className="mr-6 h-10" alt="separator" src={Separator} />

          <button className="p-4" onClick={onPrev}>
            <img alt="arrow-left" src={ArrowLeftIcon} />
          </button>

          <span className="mr-2 text-gray-500">{artboardId}</span>

          <img className="mr-2" alt="breadcrumb" src={BreadcrumbIcon} />

          <span className="text-gray-500">{totalArtboards}</span>

          <button className="p-4" onClick={onNext}>
            <img alt="arrow-right" src={ArrowRightIcon} />
          </button>
        </div>

        <div className="text-center">{artboardName}</div>

        <div className="flex w-72 justify-end items-center" />
      </>
      :
      <div className="flex">
        <img className="ml-6 mr-6" alt="sketch" src={SketchLogo} />
        <span>{documentName}</span>
      </div>
    }
  </nav>
);

export default NavBar;
