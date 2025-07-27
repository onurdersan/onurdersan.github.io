// src/components/websites-card/index.tsx

import { FiLink } from 'react-icons/fi';
import { SanitizedWebsite } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';
import LazyImage from '../lazy-image';

const WebsitesCard = ({
  websites,
  loading,
}: {
  websites: SanitizedWebsite[];
  loading: boolean;
}) => {
  const renderSkeleton = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <div className="card shadow-md card-sm bg-base-100" key={index}>
        <div className="p-8 h-full w-full">
          <div className="flex flex-col items-center text-center">
            {skeleton({ widthCls: 'w-16', heightCls: 'h-16', shape: 'rounded-full', className: 'mb-4' })}
            <div className="w-full">
              <h2 className="mb-2">
                {skeleton({ widthCls: 'w-24', heightCls: 'h-6', className: 'mx-auto' })}
              </h2>
              <div>
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4', className: 'mb-1' })}
                {skeleton({ widthCls: 'w-2/3', heightCls: 'h-4', className: 'mx-auto' })}
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <FiLink className="text-2xl" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                Diğer Projelerim ve Sitelerim
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading
              ? renderSkeleton()
              : websites.map((website, index) => (
                  <a
                    className="card shadow-md card-sm bg-base-100 cursor-pointer p-6 transition-transform transform hover:scale-105"
                    key={index}
                    href={website.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      {website.imageUrl && (
                         <div className="avatar mb-4">
                            <div className="w-16 rounded-full">
                                <LazyImage
                                  src={website.imageUrl}
                                  alt={website.name}
                                  placeholder={skeleton({
                                    widthCls: 'w-full',
                                    heightCls: 'h-full',
                                    shape: 'rounded-full',
                                  })}
                                />
                            </div>
                        </div>
                      )}
                      <h3 className="font-semibold text-base-content mb-2">{website.name}</h3>
                      <p className="text-sm text-base-content opacity-80">
                        {website.description}
                      </p>
                    </div>
                  </a>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsitesCard;
