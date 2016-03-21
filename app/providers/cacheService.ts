import {Response} from 'angular2/http';

export function CacheService(key: string, promise: Promise<Response>) {
  key = "api/" + key;

  return promise
    .then(res => {
    localStorage.setItem(key, res.text());
    return res.json();
  }).catch(error => {
    const cache = localStorage.getItem(key);
    if (!cache) throw error;

    return JSON.parse(cache);
  })
};
