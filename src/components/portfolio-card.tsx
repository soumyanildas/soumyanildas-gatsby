import React from 'react';

const PortfolioCard = (props: IPortfolioCard) => {
  return (
    <>
      <div className="rounded bg-slate-300 p-4 h-40 flex justify-center items-center">
        <img src={props.image} width={props.imageWidth} alt={props.title} />
      </div>
      <div className="ml-2 mt-4">
        <div className="font-bold text-lg tracking-tight">{props.title}</div>
        <ul className="flex flex-wrap">
          { props.techStacks.map((techStack) => <li className="mr-2 my-1 text-xs border border-cyan-700 rounded px-2 py-1 text-cyan-700 cursor-pointer hover:bg-cyan-700 hover:text-white">{ techStack }</li>)}
        </ul>
        {props.website ? <a className="text-cyan-700 tracking-tight" href={props.websiteLink} rel="nofollow" target="_blank">{props.website}</a> : null}
      </div>
    </>

  );
};

export default PortfolioCard;

export interface IPortfolioCard {
  image: string;
  imageWidth: number;
  title: string;
  website?: string;
  websiteLink?: string;
  techStacks: string[];
}