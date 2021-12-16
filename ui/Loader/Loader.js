import React from 'react';
import Loader from 'react-loader-spinner';

const SpinLoader = () => {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999999999999999999,
      }}
      // className="h-screen flex flex-col items-center justify-center min-h-screen py-2 z-50"
    >
      <Loader type='Circles' color='#c83fa9' height={50} width={50} />
    </div>
  );
};

export default SpinLoader;
