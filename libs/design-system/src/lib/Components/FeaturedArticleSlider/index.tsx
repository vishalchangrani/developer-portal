import React, { useState } from 'react';

export type Article = {
  heading: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: any;
};

export type FeaturedArticleSliderProps = {
  articles: Article[];
};

const FeaturedArticle = ({
  heading,
  description,
  ctaLink,
  ctaText,
  imageUrl,
}) => (
  <div className="flex min-h-fit flex-col-reverse overflow-hidden rounded-2xl bg-white dark:bg-primary-dark-gray md:min-h-[30rem] md:flex-row">
    <div className="min-w-[50%] self-center pl-6 pr-6 pt-10 pb-16 md:pr-32 md:pl-20">
      <h3 className="text-h3">{heading}</h3>
      <p className="py-6 dark:text-primary-gray-100">{description}</p>
      <a
        className="block w-full rounded-lg bg-black px-16 py-4 text-center text-white hover:cursor-pointer"
        href={ctaLink}
      >
        {ctaText}
      </a>
    </div>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="cover min-h-[8rem] w-full"
    />
  </div>
);

const FeaturedArticleSlider = ({ articles }: FeaturedArticleSliderProps) => {
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const ArticleComponents = articles.map((article) => (
    <FeaturedArticle {...article} />
  ));

  return (
    <div className="flex flex-col items-center justify-center">
      {ArticleComponents[currentArticleIndex]}
      {articles.length > 1 && (
        <div className="mt-12 flex items-center justify-center md:hidden">
          {articles.map((_, index) => {
            const backgroundClass =
              index === currentArticleIndex
                ? 'bg-green-success'
                : 'bg-primary-gray-100';

            return (
              <div
                key={`article-${index}`}
                onClick={() => setCurrentArticleIndex(index)}
                className={`${backgroundClass} mr-3 h-3 w-3 rounded-full hover:cursor-pointer`}
                tabIndex={0}
                role="button"
                aria-pressed="false"
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FeaturedArticleSlider;