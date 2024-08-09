import React from "react";

class Home extends React.Component {
  render() {
    return (
      <section
        id="homePage"
        data-testid="homePage"
        className="flex min-h-screen items-center justify-center"
      >
        <div className="absolute h-[100px] w-[100px] animate-ping rounded-full border border-gray-500 sm:ml-40 sm:h-[200px] sm:w-[200px]" />
        <div className="absolute h-[200px] w-[200px] animate-ping rounded-full border border-gray-500 sm:ml-40 sm:h-[300px] sm:w-[300px]" />
        <div className="absolute h-[300px] w-[300px] animate-ping rounded-full border border-gray-500 sm:ml-40 sm:h-[400px] sm:w-[400px]" />
        <div className="absolute h-[400px] w-[400px] animate-pulse rounded-full border border-sky-500 opacity-20 sm:ml-40 sm:h-[500px]  sm:w-[500px]" />
        <h1
          id="welcome"
          data-testid="welcome"
          className="z-0 text-center text-8xl text-white sm:ml-40 sm:text-9xl"
        >
          Welcome
        </h1>
      </section>
    );
  }
}

export default Home;
