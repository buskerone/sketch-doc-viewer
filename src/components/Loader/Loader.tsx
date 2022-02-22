import Lottie from 'react-lottie-player';
import { LoadingAnimation } from 'assets';

/**
 * Loader
 *
 * @description loader component that renders a Lottie animation
 * @author Carlos Knopel
 *
 * @returns React.FunctionComponent
 */
const Loader: React.FC = () => {
  return (
    <div className="z-50 h-full w-full flex justify-center items-center">
      <Lottie className="h-16 w-16" loop play animationData={LoadingAnimation} />
    </div>
  );
};

export default Loader;
