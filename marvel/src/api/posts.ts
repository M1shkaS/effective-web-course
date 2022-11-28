import axios from 'api/helpers/axios';

import { DataPosts, Character } from 'types/post';

import { transformItem, transformChar } from 'utils/transformGetItem';

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
  }
};
