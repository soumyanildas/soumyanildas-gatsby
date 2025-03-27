import React from 'react';

const Experience = () => {
  const id = React.useId();
  const [currentExperience, setExperience] = React.useState(0);

  React.useEffect(() => {
    calculateExperience();
  }, []);

  const calculateExperience = () => {
    const startYear = 2018;
    const currentYear = new Date().getFullYear();
    setExperience(currentYear - startYear);
  };

  const experiences: IExperience[] = [
    {
      title: 'Frontend Architect',
      companyName: 'Swift Security',
      companyLogo: '/images/swift-security-logo.jpg',
      startYear: 'Oct 2024',
      description: 'Founding Frontend Engineer who was pivotal in setting up the microfrontend architecture using Nx, Rspack, Module Federation 2.0, and React.'
    },
    {
      title: 'Technical Lead - Frontend',
      companyName: 'CBNITS',
      companyLogo: '/images/cbnits-logo.jpg',
      startYear: 'Jun 2024',
      endYear: 'Sept 2024',
      description: 'I led a team of 8 UI professionals, fostering collaboration and driving excellence in digital design and development. I played a key role in establishing the architecture for micro frontends using Nx, Rspack, and Module Federation, which enhanced scalability and agility.'
    },
    {
      title: 'SME - Frontend',
      companyName: 'CBNITS',
      companyLogo: '/images/cbnits-logo.jpg',
      startYear: 'Aug 2022',
      endYear: 'Jun 2024',
      description: 'At Netskope, I led development, maintenance, and collaboration on the Homepage, Reports, and Netskope Advanced Analytics. I introduced features, conducted tests, and provided feedback.'
    },
    {
      title: 'UI Developer',
      companyName: 'CBNITS',
      companyLogo: '/images/cbnits-logo.jpg',
      startYear: 'Sep 2021',
      endYear: 'Aug 2022',
      description: 'As an SME, I drove development and improvement of the Homepage and collaborated on new features in Netskope Advanced Analytics. I maintained and enhanced the Homepage and Reports pages, migrated Reports to Angular 10, and developed unit tests using Jest.'
    },
    {
      title: 'Frontend Developer',
      companyName: 'Capital Numbers',
      companyLogo: '/images/capitalnumbers-logo.jpg',
      startYear: 'May 2020',
      endYear: 'Sep 2021',
      description: 'Created modern UI/UX using Vue and Ionic Vue frameworks for web and mobile. Integrated REST APIs for real-time data updates. Collaborated on visually appealing interfaces, conducted testing for seamless user experience, and stayed updated with frontend trends.'
    },
    {
      title: 'Frontend Developer',
      companyName: 'Logic Square',
      companyLogo: '/images/logic-square-technologies-logo.jpg',
      startYear: 'May 2018',
      endYear: 'May 2020',
      description: 'Developed web and mobile apps using Angular, Ionic, and Vue.js. Delivered customized solutions, designed intuitive interfaces, and conducted comprehensive testing for high-quality apps.'
    }
  ];

  return (
    <section className="experience">
      <div className="bg-cyan-700">
        <div className="container mx-auto px-4 py-20 xl:py-28 xl:px-0">
          <div className="text-center mb-10">
            <h3 className="text-white text-3xl tracking-tight font-bold mb-4">Experience</h3>
            <hr className="border-[2px] rounded-md border-white w-20 mx-auto mt-2 mb-4" />
            <p className="text-white tracking-tight leading-relaxed mb-10">Here are some of my experiences over the last {currentExperience} years.</p>
          </div>

          {/* Mobile Timeline */}
          <ol className="mt-16 border-l border-white lg:hidden md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
            {experiences.map((experience: IExperience, index: number) => (
              <li key={`${id}-mobile-${index}`}>
                <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                  <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-white md:-mt-[5px] md:ml-0 md:mr-0"></div>
                  <div className="flex items-center gap-x-1">
                    <img className="w-[50px]" src={experience.companyLogo} alt={experience.companyName} />
                    <p className="mt-2 text-sm text-white tracking-tight">
                      {experience.companyName}
                    </p>
                  </div>
                </div>
                <div className="ml-4 mt-2 pb-5 md:ml-0 lg:pb-0">
                  <h4 className="mb-1.5 text-xl font-bold text-white tracking-tight">{experience.title}</h4>
                  <div className="mb-1 text-sm font-light text-white tracking-tight">{experience.startYear} - {experience.endYear ? experience.endYear : 'now'}</div>
                  <p className="mb-3 text-white tracking-tight">{experience.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Desktop Alternating Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white"></div>
            <div className="space-y-12">
              {experiences.map((experience: IExperience, index: number) => (
                <div key={`${id}-desktop-${index}`} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} items-center gap-x-1`}>
                      <img className="w-[50px]" src={experience.companyLogo} alt={experience.companyName} />
                      <p className="mt-2 text-sm text-white tracking-tight">
                        {experience.companyName}
                      </p>
                    </div>
                    <h4 className="mb-2 mt-2 text-xl font-bold text-white tracking-tight">{experience.title}</h4>
                    <div className="mb-1 text-sm font-light text-white tracking-tight">
                      {experience.startYear} - {experience.endYear ? experience.endYear : 'now'}
                    </div>
                    <p className="text-white tracking-tight">{experience.description}</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="h-4 w-4 rounded-full bg-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

interface IExperience {
  title: string;
  companyName: string;
  companyLogo: string;
  startYear: string;
  endYear?: string;
  description: string;
}