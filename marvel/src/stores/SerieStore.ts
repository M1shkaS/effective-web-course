import { observable, action, makeObservable, runInAction } from 'mobx';

import api from 'api';

import { Serie } from 'types/post';

class SerieStore {
  @observable
  serie: Serie = {
    id: 0,
    title: '',
    description: '',
    thumbnail: '',
    startYear: 0,
    endYear: 0,
    type: '',
    characters: [],
    comics: []
  };

  @observable
  process: string = 'loading';

  constructor() {
    makeObservable(this);
  }

  @action
  getSerie = async (serieId: string): Promise<void> => {
    try {
      this.process = 'loading';

      const serie = await api.posts.getSerie(serieId);
      runInAction(() => {
        this.serie = serie;
        this.process = 'confirmed';
      });
    } catch (error) {
      this.process = 'error';
      throw error;
    }
  };
}

const serieStore = new SerieStore();

export default serieStore;
