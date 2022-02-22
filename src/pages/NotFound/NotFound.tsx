import Lottie from 'react-lottie-player';
import { NotFoundAnimation } from 'assets';

/**
 * Not Found
 *
 * @description Not Found component with lottie animation
 * @author Carlos Knopel
 *
 * @returns React.FunctionComponent
 */
const NotFound: React.FC = () => {
  return (
    <div className="z-50 h-full w-full flex justify-center items-center">
      <Lottie className="h-72 w-72" loop play animationData={NotFoundAnimation} />
    </div>
  );
};

export default NotFound;
