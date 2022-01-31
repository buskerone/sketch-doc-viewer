import {
  SketchLogo,
  CloseIcon,
  Separator,
  ArrowRightIcon,
  ArrowLeftIcon,
  BreadcrumbIcon
} from '../../assets';

const Header = ({
  documentName,
  artboardId,
  artboardName,
  isArtboard,
  totalArtboards,
  onClose,
  onPrev,
  onNext
}) => (
  <header className="z-50 flex justify-between items-center w-full h-16 py-6 shadow-md">
    {isArtboard ?
      <>
        <div className="flex w-72 justify-start items-center">
          <button className="focus:outline-none p-6" onClick={onClose}>
            <img alt="close" src={CloseIcon} />
          </button>

          <img className="mr-6 h-10" alt="separator" src={Separator} />

          <button className="focus:outline-none p-4" onClick={onPrev}>
            <img alt="arrow-left" src={ArrowLeftIcon} />
          </button>

          <span className="mr-2 text-gray-500">{artboardId}</span>

          <img className="mr-2" alt="breadcrumb" src={BreadcrumbIcon} />

          <span className="text-gray-500">{totalArtboards}</span>

          <button className="focus:outline-none p-4" onClick={onNext}>
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
  </header>
);

export default Header;
