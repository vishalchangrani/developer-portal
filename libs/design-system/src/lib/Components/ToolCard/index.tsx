import React from 'react';

import { ReactComponent as StarIcon } from '../../../../images/action/star.svg';
import Tag from '../Tag';

export interface ToolCardProps {
  title: string;
  authorIcon: string;
  authorName: string;
  tags: string[];
  link: string;
  stars: number;
  toolIcon: string;
  description: string;
}

export function ToolCard({
  title,
  authorIcon,
  authorName,
  tags,
  link,
  stars,
  toolIcon,
  description,
}: ToolCardProps) {
  return (
    <a
      className="flex gap-4 rounded-lg bg-white py-6 px-8 dark:bg-primary-dark-gray"
      href={link}
    >
      <div>
        <div className="min-w-16 h-16 w-16 rounded-lg p-3 shadow-tool-card-icon	backdrop-blur-2xl dark:bg-dark-tool-card-icon">
          <img src={toolIcon} />
        </div>
      </div>
      <div className="grow">
        <h5 className="text-h5">{title}</h5>
        <div className="flex items-center">
          <div className="flex shrink-0 items-center gap-2 pr-3 md:pr-4">
            <div>
              <img src={authorIcon} alt={authorName} width={24} height={24} />
            </div>
            <div className="dark:gray-400 md:leading-1 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
              {authorName}
            </div>
          </div>

          <div className="shrink-0 pr-1 line-clamp-1">
            {tags.map((tag, i) => (
              <Tag name={tag} key={i} />
            ))}
          </div>

          <div className="flex shrink-0 gap-1">
            <StarIcon
              className="h-fit fill-amber-400 stroke-amber-400"
              width={14}
              height={14}
            />
            <div className="md:leading-1 h-fit text-sm text-gray-500 dark:text-gray-300">
              {stars}
            </div>
          </div>
        </div>
          <div className="pt-2 text-gray-700 line-clamp-2 dark:text-gray-300">
            {description}
          </div>

      </div>
    </a>
  );
}