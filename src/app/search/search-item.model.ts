export interface Thumbnails {
  url: string;
  width: number;
  height: number;
}

export class SearchItem {
  constructor(
    public id: string,
    public etag: string,
    public publishedAt: string,
    public channelId: string,
    public title: string,
    public description: string,
    public thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      hight: Thumbnails;
      standard: Thumbnails;
      maxres: Thumbnails;
    },
    public channelTitle: string,
    public tags: string[],
    public categoryId: string,
    public defaultAudioLanguage: string,
    public statistics: {
      viewCount: number;
      likeCount: number;
      dislikeCount: number;
      favoriteCount: number;
      commentCount: number;
    },
  ) {}
}
