import React from 'react';

const Hero = () => {

  return (
    <section className="hero">
      <div className="container mx-auto px-4 lg:gap-8 xl:gap-0 xl:px-0 lg:py-16 lg:flex lg:justify-between lg:items-center">
        <div className="mt-16 text-center lg:text-left">
          <h3 className="max-w-3xl font-extrabold mb-4 text-5xl lg:text-7xl tracking-tight">Hello, I'm <span className="text-cyan-700">Soumyanil</span></h3>
          <p className="max-w-3xl font-light text-xl lg:text-3xl tracking-tight">A <span className="text-cyan-700 font-semibold">Calcutta</span> based Software Engineer, Frontend Developer and Air Guitarist</p>
        </div>
        <div className="mt-16 flex justify-center lg:mx-auto">
          <img height="300" width="300" src="/images/hero-das.svg" alt="hero-das" />
        </div>
      </div>
    </section>
  );
};

export default Hero;