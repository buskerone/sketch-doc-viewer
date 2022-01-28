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
  totalArtboards
}) => (
  <nav className="flex justify-between items-center w-full h-16 px-8 drop-shadow-md">
    {isArtboard ?
      <>
        <div className="flex w-72 justify-start items-center">
          <img className="mr-4" alt="close" src={CloseIcon} />
          <img className="mr-6 h-10" alt="separator" src={Separator} />
          <img className="mr-4" alt="arrow-left" src={ArrowLeftIcon} />
          <span className="mr-2 text-gray-500">{artboardId}</span>
          <img className="mr-2" alt="breadcrumb" src={BreadcrumbIcon} />
          <span className="mr-4 text-gray-500">{totalArtboards}</span>
          <img alt="arrow-right" src={ArrowRightIcon} />
        </div>
        <div>{artboardName}</div>
        <div className="flex w-72 justify-end items-center" />
      </>
      :
      <div className="flex">
        <img className="mr-6" alt="sketch" src={SketchLogo} />
        <span>{documentName}</span>
      </div>
    }
  </nav>
);

export default NavBar;
