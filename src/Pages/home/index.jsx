import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section
        id='homePage'
        data-testid='homePage'
        className='flex min-h-screen items-center justify-center'
      >
        <div className='absolute border border-gray-500 rounded-full h-[100px] w-[100px] animate-ping sm:h-[200px] sm:w-[200px] sm:ml-40' />
        <div className='absolute border border-gray-500 rounded-full h-[200px] w-[200px] animate-ping sm:h-[300px] sm:w-[300px] sm:ml-40' />
        <div className='absolute border border-gray-500 rounded-full h-[300px] w-[300px] animate-ping sm:h-[400px] sm:w-[400px] sm:ml-40' />
        <div className='absolute border border-sky-500 rounded-full h-[400px] w-[400px] animate-pulse opacity-20 sm:h-[500px] sm:w-[500px]  sm:ml-40' />
        <h1
          id='welcome'
          data-testid='welcome'
          className='text-8xl text-white text-center z-0 sm:text-9xl sm:ml-40'
        >
          Welcome
        </h1>
      </section>
    );
  }
}

export default Home;
