import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-700">
      <div className="container mx-auto px-4 py-20 relative  xl:py-28 xl:px-0">
        <div className="absolute rounded bg-gray-400 p-10 -top-16 left-10 right-10 drop-shadow-xl border border-gray-400 selection:bg-cyan-700 selection:text-white lg:p-14 xl:left-0 xl:right-0">
          <div className="flex flex-col justify-between items-center xl:flex-row xl:justify-between xl:items-center">
            <div className="text-white text-3xl text-center font-bold tracking-tight xl:text-left">
              Start a project
            </div>
            <div className="text-white text-lg text-center font-normal tracking-tight mt-5 xl:mt-0">
              Interested in working together? We should queue up a time to chat.
            </div>
            <div className="mt-10 xl:mt-0">
              <a className="border-2 border-cyan-700 text-cyan-700 text-xl mt-10 py-3 px-16 rounded-full tracking-tight transition-colors duration-300 ease-in-out lg:mt-0 hover:bg-cyan-700 hover:text-white" href="https://calendly.com/soumyanildas/30min" rel="nofollow" target="_blank">Let's talk</a>
            </div>
          </div>
        </div>
        <div className="selection:bg-white selection:text-cyan-700">
          <h3 className="text-center text-5xl text-white font-bold mb-2 mt-64 md:mt-48 xl:mt-24">sd.</h3>
          <p className="text-center text-xl text-white font-light mb-14 tracking-tight">Making the web a more creative place.</p>
          <div className="w-44 mx-auto flex justify-between items-center mb-14">
            { /* Email */}
            <a href="mailto:info@soumyanildas.com" aria-label="Email me" className="border border-white p-3 rounded-full text-xl fill-white transition-colors duration-300 ease-in-out hover:fill-cyan-700 hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </a>
            { /* github */}
            <a href="https://github.com/soumyanildas" aria-label="Github" rel="nofollow" target="_blank" className="border border-white p-3 rounded-full text-xl fill-white transition-colors duration-300 ease-in-out hover:fill-cyan-700 hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            { /* linkedin */}
            <a href="https://www.linkedin.com/in/soumyanil-das/" aria-label="LinkedIn" rel="nofollow" target="_blank" className="border border-white p-3 rounded-full text-xl fill-white transition-colors duration-300 ease-in-out hover:fill-cyan-700 hover:bg-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </a>
          </div>
          <div className="text-center text-white text-sm tracking-tight mb-5">Copyright &copy; {new Date().getFullYear()} Soumyanil Das</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;