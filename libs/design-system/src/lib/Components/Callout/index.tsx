import React from 'react';
import CalloutImage from '../../Images/network/callout.png';

export type CalloutProps = {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
};

const Callout = ({ heading, description, ctaText, ctaLink }: CalloutProps) => {
  return (
    <div
      className="flex bg-white rounded-2xl dark:bg-primary-dark-gray sm:flex-col-reverse md:flex-row"
      style={{ maxWidth: '1140px' }}
    >
      <div className="flex-1 pb-24 pl-16 pr-36 pt-36 sm:px-6 sm:py-8">
        <h3 className="text-h3">{heading}</h3>
        <p className="py-6 dark:text-primary-gray-100">{description}</p>
        <a
          className="px-16 py-4 text-white bg-black rounded-lg mt-11 hover:cursor-pointer"
          href={ctaLink}
        >
          {ctaText}
        </a>
      </div>
      <img src={CalloutImage} alt="Flowdocs node illustration" width="570" />
    </div>
  );
};

export default Callout;
