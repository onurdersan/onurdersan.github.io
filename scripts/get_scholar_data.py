# scripts/get_scholar_data.py

import json
from scholarly import scholarly
import os

# Google Scholar Yazar ID'nizi buraya girin
AUTHOR_ID = 'kNMI5kEAAAAJ'
# Çıktı dosyasının yolu (src klasörünün içine kaydedeceğiz)
OUTPUT_PATH = 'src/data/scholar.json'

def fetch_publications():
    print(f"Fetching publications for author ID: {AUTHOR_ID}")
    
    try:
        # Yazarı bul ve tüm bilgilerini doldur
        author = scholarly.fill(scholarly.search_author_id(AUTHOR_ID))
        
        publications_data = []
        
        # Sadece en güncel 10 yayını alalım (isteğe bağlı)
        for pub in author.get('publications', [])[:10]:
            filled_pub = scholarly.fill(pub)
            
            publication_info = {
                'title': filled_pub.get('bib', {}).get('title'),
                'authors': ', '.join(filled_pub.get('bib', {}).get('author', [])),
                'publication': filled_pub.get('bib', {}).get('venue'),
                'link': filled_pub.get('pub_url'),
                'cited_by': {
                    'value': filled_pub.get('num_citations', 0)
                }
            }
            publications_data.append(publication_info)
            print(f"  - Fetched: {publication_info['title']}")

        # data klasörünün var olduğundan emin ol
        os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
            
        # Verileri JSON dosyasına yaz
        with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
            json.dump({'articles': publications_data}, f, ensure_ascii=False, indent=2)
            
        print(f"Successfully saved {len(publications_data)} publications to {OUTPUT_PATH}")

    except Exception as e:
        print(f"An error occurred: {e}")
        # Hata durumunda boş bir dosya oluştur ki site bozulmasın
        os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
        with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
            json.dump({'articles': []}, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    fetch_publications()
