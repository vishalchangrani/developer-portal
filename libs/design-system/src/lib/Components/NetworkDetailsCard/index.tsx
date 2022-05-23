import React from 'react';
import { Link } from '../Link';
import { RightChevronIcon, RssFeedIcon } from '../icons';

export type NetworkDetailsCardProps = {
  status: 'Under Maintenance' | 'Healthy';
  statusLink: string;
  version: string;
  lastSporkDate: string;
  nextSporkDate: string;
  rssFeed: string;
}

const NetworkDetailsCard = ({ status, statusLink, version, lastSporkDate, nextSporkDate, rssFeed }: NetworkDetailsCardProps) => {
  return (
    <div className="flex items-center text-center bg-white md:flex-row rounded-2xl dark:bg-primary-dark-gray sm:flex-col" style={{ width: 'fit-content' }}>

      <div className="px-8 py-4 md:border-r-2 border-accent-light-gray sm:border-0">
        <p className="mb-2 text-sm uppercase text-primary-gray-200">Version</p>{version}
      </div>

      <div className="px-8 py-4 md:border-r-2 border-accent-light-gray sm:border-0 ">
        <p className="mb-2 text-sm uppercase text-primary-gray-200" style={{ minWidth: '148px' }}>Status</p>
        {/* @ts-ignore */}
        <Link href={statusLink}>{status}</Link>
      </div>

      <div className="px-8 py-4 md:border-r-2 border-accent-light-gray sm:border-0">
        <p className="mb-2 text-sm uppercase text-primary-gray-200">Last Spork Date</p>{lastSporkDate}
      </div>

      <div className="px-8 py-4 md:border-r-2 border-accent-light-gray sm:border-0">
        <p className="mb-2 text-sm uppercase text-primary-gray-200">Next Spork Date</p>{nextSporkDate}
      </div>

      <div className="px-8 py-4">
        <p className="mb-2 text-sm uppercase text-primary-gray-200">RSS Feed</p>
        {/* @ts-ignore */}
        <Link href={rssFeed} className="flex items-center text-sm text-primary-blue dark:text-primary-gray-50 hover:cursor-pointer">
          <div className="w-4"><RssFeedIcon /></div>&nbsp;RSS Feed&nbsp;<RightChevronIcon />
        </Link>
      </div>

    </div>
  )
}

export default NetworkDetailsCard;
