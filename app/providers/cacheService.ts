import {Response} from 'angular2/http';
import {Storage, LocalStorage} from 'ionic-angular';

const storage = new Storage(LocalStorage);

export function CacheService(key: string, promise: Promise<Response>) {
  key = "api/" + key;

  return promise
    .then(res => {
    storage.setJson(key, res.json());
    return res.json();
  }).catch(error => {
    if (error.status != 200) throw error;

    return storage.getJson(key).then(cache => {
      if (!cache) throw error;
      return cache;
    });

  })
};
