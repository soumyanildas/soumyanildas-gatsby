import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import Header from '../components/header';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="h-screen">
      <Header >
        {/* <ul className="flex justify-between items-center">
          <li className="mr-4 hover:text-cyan-700"><a href="/downloads/Resume-Soumyanil-Das.pdf" download>Resume</a></li>
        </ul> */}
      </Header>
      <div className="container mx-auto h-3/4 flex flex-col justify-center items-center px-4 xl:px-0">
        <div className="text-8xl fill-cyan-700">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
        </div>
        <h3 className="text-center text-4xl mt-5 font-bold tracking-tight">Oops you are in the wrong place.</h3>
        <h3 className="text-center text-2xl mt-5 font-light tracking-tight">Maybe try a different page?</h3>
        <Link to="/" className="text-center mt-5 rounded-full border-2 border-cyan-700 py-3 px-16 text-cyan-700 transition-colors duration-300 ease-in-out hover:bg-cyan-700 hover:text-white">Return Home</Link>

      </div>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => (
  <>
    <title>Not found | Soumyanil Das</title>
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
  </>
)
