import React, { useId } from 'react';
import PortfolioCard, { IPortfolioCard } from './portfolio-card';

const Portfolio = () => {
  const id = useId();

  const portfolios: IPortfolioCard[] = [
    {
      image: '/images/sraps.png',
      imageWidth: 100,
      title: 'SRAPS',
      website: 'sraps.ch',
      websiteLink: 'https://sraps.ch'
    },
    {
      image: '/images/netskope.svg',
      imageWidth: 180,
      title: 'Netskope'
    },
    {
      image: '/images/casino-guide.png',
      imageWidth: 120,
      title: 'Casino Guide',
      website: 'casinoguide.com',
      websiteLink: 'https://casinoguide.com'
    },
    {
      image: '/images/mike-masse.png',
      imageWidth: 180,
      title: 'Mike Masse',
      website: 'mikemasse.com',
      websiteLink: 'https://mikemasse.com'
    },
    {
      image: '/images/basketball-plus.png',
      imageWidth: 180,
      title: 'Basketball Plus',
    },
    {
      image: '/images/zethion.png',
      imageWidth: 150,
      title: 'Zethion',
    },
    {
      image: '/images/clusterp.png',
      imageWidth: 200,
      title: 'Clusterp',
    },
  ]

  return (
    <section className="portfolio selection:bg-cyan-700 selection:text-white">
      <div className="container mx-auto px-4 pt-20 xl:py-28 xl:px-0">
        <div className="text-center mb-10">
          <h3 className="text-3xl tracking-tight font-bold mb-4">Portfolio</h3>
          <p className="tracking-tight leading-relaxed">Here are a few past projects I've worked on. Want to see more? <a className="text-cyan-700" href="mailto:info@soumyanildas.com">Email me</a>.</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-12">
          {portfolios.map((portfolio: IPortfolioCard, index) => (
            <div key={`${id}-${index}`} className="lg:col-span-4 xl:col-span-3">
              <PortfolioCard image={portfolio.image} imageWidth={portfolio.imageWidth} title={portfolio.title} website={portfolio.website} websiteLink={portfolio.websiteLink} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;