import { ai } from './AI';
import { user } from './user';
export class MarkerService {
  public ai = ai;
  public user = user;
}

export const markerService = new MarkerService();
