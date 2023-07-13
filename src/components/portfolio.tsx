import React, { useId } from 'react';
import PortfolioCard, { IPortfolioCard } from './portfolio-card';

const Portfolio = () => {
  const id = useId();

  const portfolios: IPortfolioCard[] = [
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254282/sraps.png',
      imageWidth: 100,
      title: 'SRAPS',
      website: 'sraps.ch',
      websiteLink: 'https://sraps.ch'
    },
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254282/mike-masse.png',
      imageWidth: 180,
      title: 'Mike Masse',
      website: 'mikemasse.com',
      websiteLink: 'https://mikemasse.com'
    },
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254281/netskope.svg',
      imageWidth: 180,
      title: 'Netskope'
    },
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254280/casino-guide.png',
      imageWidth: 120,
      title: 'Casino Guide',
      website: 'casino-guide.com',
      websiteLink: 'https://casino-guide.com'
    },
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254281/basketball-plus.png',
      imageWidth: 180,
      title: 'Basketball Plus',
    },
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254282/zethion.png',
      imageWidth: 150,
      title: 'Zethion',
    },
    {
      image: 'https://res.cloudinary.com/soumyanil/image/upload/v1689254281/clusterp.png',
      imageWidth: 200,
      title: 'Clusterp',
    },
  ]

  return (
    <div className="container mx-auto px-4 pt-20 xl:py-28 xl:px-0">
      <div className="text-center mb-10">
        <h3 className="text-3xl tracking-tight font-bold mb-4">Portfolio</h3>
        <p className="tracking-tight leading-relaxed text-md">Here are a few past projects I've worked on. Want to see more? <a className="text-blue-500" href="mailto:info@soumyanildas.com">Email me</a>.</p>
      </div>
      <div className="grid gap-12 lg:grid-cols-12">
        { portfolios.map((portfolio: IPortfolioCard, index) => (
          <div key={`${id}-${index}`} className="lg:col-span-4 xl:col-span-3">
            <PortfolioCard image={portfolio.image} imageWidth={portfolio.imageWidth} title={portfolio.title} website={portfolio.website} websiteLink={portfolio.websiteLink} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;