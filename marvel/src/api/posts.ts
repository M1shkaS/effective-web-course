import axios from 'api/helpers/axios';
import envs from 'config/environments';
import { DataPosts } from 'types/post';

import { transformItem } from 'utils/transformGetItem';

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
  }
};
