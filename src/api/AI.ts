import { Axios } from 'src/lib/axios';

export const keys = {
  suggest_status: (params?: SearchParams.SuggestStatus) => ['/ai/suggest-status', params] as const,
};

class AI extends Axios {
  keys = keys;

  suggestStatus(params?: SearchParams.SuggestStatus) {
    return this.get(this.keys.suggest_status(params)[0], { params });
  }
}

export const ai = new AI();
