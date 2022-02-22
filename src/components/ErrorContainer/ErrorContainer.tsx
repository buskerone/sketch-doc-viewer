import React from 'react';
import Lottie from 'react-lottie-player';
import { ErrorAnimation } from 'assets';

interface IErrorContainerProps {
  screen: string;
}

/**
 * Error Container
 *
 * @description This component shows an error animation + a custom text
 * @author Carlos Knopel
 *
 * @returns React.FunctionComponent
 */
const ErrorContainer: React.FC<IErrorContainerProps> = ({ screen }) => {
  return (
    <div className="z-50 h-full w-full flex flex-col justify-center items-center">
      <Lottie className="h-72 w-72" loop play animationData={ErrorAnimation} />
      <h3 className="text-sm">An error has occurred while showing <b>{screen}</b> screen</h3>
    </div>
  );
};

export default ErrorContainer;
