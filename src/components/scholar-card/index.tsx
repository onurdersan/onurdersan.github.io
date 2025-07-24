// src/components/scholar-card/index.tsx

import { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { PiBooks } from 'react-icons/pi'; // Yeni bir ikon kullanalım
import { skeleton } from '../../utils';
import { ga } from '../../utils';

// Google Scholar'dan gelecek makale verisi için bir interface
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
  loading,
  scholar,
  googleAnalyticsId,
}: {
  loading: boolean;
  scholar: { authorId: string; limit: number };
  googleAnalyticsId?: string;
}) => {
  const [articles, setArticles] = useState<ScholarArticle[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!scholar.authorId) return;
      try {
        // ÖNEMLİ: Bu URL, bir aracı API servisine aittir.
        // Burada örnek olarak varsayımsal bir API endpoint'i kullanılmıştır.
        // Gerçek bir servis (örn: SerpApi) kullandığınızda URL'yi ve parametreleri
        // o servisin dokümantasyonuna göre düzenlemeniz gerekir.
        const response = await axios.get(
          `https://YOUR_PROXY_API_ENDPOINT?engine=google_scholar_author&author_id=${scholar.authorId}`
        );
        
        // Gelen veriyi kendi formatımıza uygun hale getiriyoruz
        // Bu kısım da kullandığınız API'ye göre değişebilir.
        if (response.data && response.data.articles) {
          setArticles(response.data.articles);
        }

      } catch (err: any) {
        setError(err.message);
        console.error("Failed to fetch Google Scholar articles:", err);
      }
    };

    fetchArticles();
  }, [scholar.authorId]);

  const renderSkeleton = () => {
    // ... (Mevcut PublicationCard'daki skeleton kodunu buraya kopyalayabilirsiniz)
    return <p>Loading articles...</p>;
  };

  const renderArticles = () => {
    if (error) {
      return (
        <div className="text-center col-span-1 md:col-span-2">
          <p className="text-sm opacity-50 text-base-content">
            Could not load articles. Check API configuration.
          </p>
        </div>
      );
    }
    
    return articles.slice(0, scholar.limit).map((item, index) => (
      <a
        className="card shadow-md card-sm bg-base-100 cursor-pointer p-4"
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <h3 className="font-semibold text-base-content mb-1">{item.title}</h3>
        <p className="text-xs text-base-content opacity-60 mb-1">{item.authors}</p>
        <p className="text-sm text-base-content opacity-80 mb-2">{item.publication}</p>
        {item.cited_by?.value && (
            <span className="text-xs font-semibold opacity-50">
                Cited by {item.cited_by.value}
            </span>
        )}
      </a>
    ));
  };
  
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
                Google Scholar
              </h3>
               <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                 Recent Publications
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loading || !articles.length ? renderSkeleton() : renderArticles()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarCard;
