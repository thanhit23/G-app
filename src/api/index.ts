import { like } from './like';
import { post } from './post';
import { user } from './user';
import { follow } from './follow';
import { comment } from './comment';
import { newsFeed } from './news-feed';

export class MarkerService {
  public user = user;
  public post = post;
  public like = like;
  public follow = follow;
  public comment = comment;
  public newsFeed = newsFeed;
}

export const markerService = new MarkerService();
