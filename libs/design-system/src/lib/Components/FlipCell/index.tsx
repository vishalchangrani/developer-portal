import React from 'react';
import CommentIcon from '../icons/CommentIcon';
import RoundImage from './RoundImage';
import Tag from './Tag';
import CalendarIcon from '../icons/CalendarIcon';

export type User = {
  profilePicture: string;
  name: string;
};

export type FlipCellProps = {
  numComments: number;
  heading: string;
  tags: string[];
  participant: User;
  date: string;
};

const FlipCell = ({ heading, tags, participant, numComments, date }: FlipCellProps) => {
  return (
    <div className="flex items-center justify-between py-6 bg-white rounded-lg md:flex-row px-11 dark:bg-primary-dark-gray sm:p-8 sm:flex-col hover:shadow-2xl">
      <div className='flex items-center'>
        <svg className="md:inline-flex sm:hidden" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="17.5" stroke="#47FFB2" />
          <circle cx="18" cy="18" r="5.5" fill="#47FFB2" stroke="#47FFB2" />
        </svg>
        <div className="md:ml-4 sm:ml-0">
          <p className="mb-1 text-xl font-semibold sm:text-lg">{heading}</p>
          <span className="text-primary-gray-300">{tags.map(tag => <Tag key={tag} name={tag} />)}</span>
        </div>
      </div>
      <div className="flex items-center sm:mt-12 md:mt-0">
        <div className="w-28">
          <RoundImage imageUri={participant.profilePicture} altText={participant.name} />
        </div>
        <div className="flex text-primary-gray-300 space-between"><CalendarIcon /> {date}</div>
        <div className="flex ml-3 text-primary-gray-300"><CommentIcon /> <span className="ml-3">{numComments}</span></div>
      </div>
    </div >
  )
}

export default FlipCell;
