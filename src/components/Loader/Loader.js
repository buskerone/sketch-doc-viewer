import Lottie from 'react-lottie-player';
import { LottieAnimation } from 'assets';

/**
 * Loader
 *
 * @description loader component that renders a Lottie animation
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const Loader = () => {
  return (
    <div className="z-50 h-screen w-screen flex justify-center items-center">
      <Lottie className="h-16 w-16" loop play animationData={LottieAnimation} />
    </div>
  );
};

export default Loader;
