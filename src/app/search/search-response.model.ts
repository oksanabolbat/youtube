import { Thumbnails } from './search-item.model';

export interface SearchResponseProp {
  kind: string;
  etag: string;
  id: string;

  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      high: Thumbnails;
      standard: Thumbnails;
      maxres: Thumbnails;
    };
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastConten: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
  statistics: {
    viewCount: number;
    likeCoun: number;
    dislikeCount: number;
    favoriteCount: number;
    commentCount: number;
  };
}

export class SearchResponse {}
