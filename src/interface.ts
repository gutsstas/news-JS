export interface SourceInt {
  category?: string;
  country?: string;
  description?: string;
  id: string;
  language?: string;
  name: string;
  url?: string;
}

export interface Start {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: SourceInt;
  title: string;
  url: string;
  urlToImage: string;
}

export interface DrawNews {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface DrawSources {
  sources: SourceInt[];
  status: string;
}
