import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 xl:px-0 flex justify-between items-center">
      <h1 className="text-alizarin font-bold text-5xl">sd.</h1>
      <ul className="flex justify-between items-center">
        <li className="mr-4 hover:text-alizarin"><a href="/Resume-Soumyanil-Das.pdf" download>Resume</a></li>
        <li><button onClick={() => scrollTo('#contact-us')} className="rounded-full outline outline-2 outline-alizarin py-2 px-6 text-alizarin transition-colors duration-300 ease-in-out hover:bg-alizarin hover:text-white">Say Hello</button></li>
      </ul>
    </header>
  );
};

export default Header;