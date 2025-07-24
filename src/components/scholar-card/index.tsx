// src/components/scholar-card/index.tsx

import { Fragment } from 'react';
import { PiBooks } from 'react-icons/pi';
import { skeleton } from '../../utils';

interface ScholarArticle {
  title: string;
  link: string;
  authors: string;
  publication: string;
  cited_by: {
    value: number;
  };
}

const ScholarCard = ({
  articles,
  loading,
}: {
  articles: ScholarArticle[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return Array.from({ length: 2 }).map((_, index) => (
      <div className="card shadow-md card-sm bg-base-100 p-4" key={index}>
        {skeleton({ widthCls: 'w-10/12', heightCls: 'h-4', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-8/12', heightCls: 'h-3', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-full', heightCls: 'h-3', className: 'mb-2' })}
        {skeleton({ widthCls: 'w-4/12', heightCls: 'h-3' })}
      </div>
    ));
  };

  if (!loading && articles.length === 0) {
    return null;
  }

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <PiBooks className="text-2xl" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                Akademik Yayınlar
              </h3>
              <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                Google Scholar'dan
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading
              ? renderSkeleton()
              : articles.map((item, index) => (
                  <a
                    className="card shadow-md card-sm bg-base-100 cursor-pointer p-4 transition-transform transform hover:scale-105"
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h3 className="font-semibold text-base-content mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-base-content opacity-60 mb-1">
                      {item.authors}
                    </p>
                    <p className="text-sm text-base-content opacity-80 mb-2">
                      {item.publication}
                    </p>
                    {item.cited_by?.value > 0 && (
                      <span className="text-xs font-semibold opacity-50">
                        {item.cited_by.value} atıf
                      </span>
                    )}
                  </a>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarCard;
