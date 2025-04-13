import { Axios } from 'src/lib/axios';

export const keys = {
  get_news_feed: (params: SearchParams.NewsFeed) => [`news-feed`, params] as const,
};

class NewsFeed extends Axios {
  keys = keys;

  getNewsFeed(params: SearchParams.NewsFeed) {
    return this.get(this.keys.get_news_feed(params)[0], { params });
  }
}

export const newsFeed = new NewsFeed();
