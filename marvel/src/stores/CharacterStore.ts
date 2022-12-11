import { observable, action, makeObservable, runInAction } from 'mobx';

import api from 'api';

import { Character } from 'types/post';

class CharacterStore {
  @observable
  character: Character = {
    id: 0,
    name: '',
    description: '',
    thumbnail: '',
    comics: [],
    series: []
  };

  @observable
  process: string = 'loading';

  constructor() {
    makeObservable(this);
  }

  @action
  getCharacter = async (charId: string): Promise<void> => {
    try {
      this.process = 'loading';

      const char = await api.posts.getCharacter(charId);
      runInAction(() => {
        this.character = char;
        this.process = 'confirmed';
      });
    } catch (error) {
      this.process = 'error';
      throw error;
    }
  };
}

const characterStore = new CharacterStore();

export default characterStore;
