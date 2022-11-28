import { observable, action, makeObservable, runInAction } from 'mobx';

import api from 'api';

import { Comic } from 'types/post';

class ComicStore {
  @observable
  comic: Comic = {
    id: 0,
    title: '',
    description: '',
    thumbnail: '',
    pageCount: '',
    price: '',
    language: '',
    characters: [],
    series: []
  };

  @observable
  process: string = 'loading';

  constructor() {
    makeObservable(this);
  }

  @action
  getComic = async (comicId: string): Promise<void> => {
    try {
      this.process = 'loading';

      const comic = await api.posts.getComic(comicId);
      runInAction(() => {
        this.comic = comic;
        this.process = 'confirmed';
      });
    } catch (error) {
      this.process = 'error';
      throw error;
    }
  };
}

const comicStore = new ComicStore();

export default comicStore;
