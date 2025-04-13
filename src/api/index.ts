import { like } from './like';
import { post } from './post';
import { user } from './user';
import { comment } from './comment';
import { newsFeed } from './news-feed';

export class MarkerService {
  public user = user;
  public post = post;
  public like = like;
  public newsFeed = newsFeed;
  public comment = comment;
}

export const markerService = new MarkerService();
