import axios from 'api/helpers/axios';

import { DataPosts, Character, Comic } from 'types/post';

import {
  transformItem,
  transformChar,
  transformComic
} from 'utils/transformGetItem';

import envs from 'config/environments';

export default {
  async getPostsList(
    listName: string,
    offset: number,
    limit: number
  ): Promise<DataPosts> {
    const response = await axios.get(
      `/${listName}?limit=${limit}&offset=${offset}&${envs.apiKey}`
    );

    const dataPosts = {
      totalPosts: response.data.data.total,
      postsList: response.data.data.results.map(transformItem)
    };
    return dataPosts;
  },
  async getCharacter(charId: string): Promise<Character> {
    const response = await axios.get(`/characters/${charId}?${envs.apiKey}`);
    return transformChar(response.data.data.results[0]);
  },
  async getComic(comicId: string): Promise<Comic> {
    const response = await axios.get(`/comics/${comicId}?${envs.apiKey}`);
    return transformComic(response.data.data.results[0]);
  }
};
