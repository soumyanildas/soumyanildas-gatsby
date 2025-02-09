import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import Header from '../components/header';
import Hero from '../components/hero';
import About from '../components/about';
import Experience from '../components/experience';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Footer from '../components/footer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Testimonial from '../components/testimonial';
import { Analytics } from "@vercel/analytics/react"

const Home: React.FC<PageProps> = () => {
  return (
    <main className="h-screen">
      <Header >
        <ul className="flex gap-x-1 items-center">
          <li className="mr-4 hover:text-cyan-700"><a href="https://blog.soumyanildas.com" target="_blank">Blog</a></li>
          <li><button onClick={() => scrollTo('#contact-us')} className="rounded-full border-2 border-cyan-700 py-2 px-6 text-cyan-700 transition-colors duration-300 ease-in-out hover:bg-cyan-700 hover:text-white">Say Hello</button></li>
        </ul>
      </Header>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}

export default Home;

export const Head: HeadFC = () => (
  <>
    <title>Soumyanil Das | Frontend Developer</title>
    <meta name="description" content="Soumyanil Das, primarily a Front End Developer from Calcutta" />
    <meta name="twitter:title" content="Soumyanil Das | Frontend Developer" />
    <meta name="twitter:description" content="Soumyanil Das, primarily a Front End Developer from Calcutta" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Soumyanil Das | Front End Developer" />
    <meta property="og:description" content="Soumyanil Das, primarily a Front End Developer from Calcutta" />
    <meta property="og:url" content="https://www.soumyanildas.com/" />
    <meta property="og:site_name" content="Soumyanil Das | Front End Developer" />
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
  </>
)
