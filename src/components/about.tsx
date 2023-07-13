import React, { useId } from 'react';

const About = () => {
  const id = useId();

  const technologies = [
    {
      image: '/images/icons/angular.svg',
      title: 'Angular'
    },
    {
      image: '/images/icons/javascript.svg',
      title: 'Javascript'
    },
    {
      image: '/images/icons/typescript.svg',
      title: 'Typescript'
    },
    {
      image: '/images/icons/html5.svg',
      title: 'HTML5'
    },
    {
      image: '/images/icons/sass.svg',
      title: 'SASS'
    },
    {
      image: '/images/icons/firebase.svg',
      title: 'Firebase'
    },
    {
      image: '/images/icons/vuejs.svg',
      title: 'VueJS'
    },
    {
      image: '/images/icons/tailwind.svg',
      title: 'Tailwind'
    },
    {
      image: '/images/icons/ngrx.svg',
      title: 'NgRx'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20 lg:grid-cols-12 lg:gap-x-12 xl:py-40 grid xl:px-0 ">
      <div className="col-span-12 text-center mb-10">
        <h3 className="text-3xl tracking-tight font-bold">About Me</h3>
      </div>
      <div className="col-span-12 xl:col-span-6">
        <p className="tracking-tight leading-relaxed text-lg">I am a Calcutta-based Frontend Developer who combines code with creative, interactive, and modern designs. As a freelancer, I work across the full JavaScript stack, delivering comprehensive solutions. I am also a Subject Matter Expert - Frontend <span className="text-alizarin font-semibold"><a rel="nofollow" href="https://www.cbnits.com/" target="_blank">@CBNITS</a></span>. In my free time, you can catch me gaming on the PS4 or relaxing to music on Spotify.</p>
      </div>
      <div className="col-span-12 mt-20 flex flex-wrap justify-center items-center xl:col-span-6 xl:mt-0 xl:flex-nowrap xl:justify-between">
        {technologies.map((technology, index) => (
          <div key={`${id}-${index}`} className="mr-5 xl:mr-0"><img src={technology.image} alt={technology.title} title={technology.title} width="48" height="48" /></div>
        ))}
      </div>
    </div>
  );
};

export default About;