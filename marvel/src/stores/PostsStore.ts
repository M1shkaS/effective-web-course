import { observable, action, makeObservable, runInAction } from 'mobx';

import api from 'api';

import { Post } from 'types/post';

class PostsStore {
  @observable
  posts: Post[] = [];

  @observable
  totalPosts: number = 0;

  @observable
  limit: number = 24;

  @observable
  nameStartsWith: string = '';

  @observable
  typeSearchRequest: string = '';

  @observable
  process: string = 'loading';

  constructor() {
    makeObservable(this);
  }

  @action
  getPostsList = async (
    listName: string,
    offset: number = 0
  ): Promise<void> => {
    try {
      this.process = 'loading';
      const dataPosts = await api.posts.getPostsList(
        listName,
        offset,
        this.limit
      );

      runInAction(() => {
        this.posts = dataPosts.postsList;
        this.totalPosts = dataPosts.totalPosts;
        this.typeSearchRequest = '';
        this.process = 'confirmed';
      });
    } catch (error) {
      this.process = 'error';
      throw error;
    }
  };

  @action
  getPostsByNameStartsWith = async (
    listName: string,
    nameStartsWith: string,
    offset: number
  ): Promise<void> => {
    try {
      this.process = 'loading';
      const dataPosts = await api.posts.getPostsByNameStartsWith(
        listName,
        nameStartsWith,
        this.limit,
        offset
      );

      runInAction(() => {
        this.posts = dataPosts.postsList;
        this.totalPosts = dataPosts.totalPosts;
        this.typeSearchRequest = listName;
        this.nameStartsWith = nameStartsWith;
        this.process = 'confirmed';
      });
    } catch (error) {
      this.process = 'error';
      throw error;
    }
  };

  @action
  getPostsByTitleStartsWith = async (
    listName: string,
    titleStartsWith: string,
    offset: number
  ): Promise<void> => {
    try {
      this.process = 'loading';
      const dataPosts = await api.posts.getPostsByTitleStartsWith(
        listName,
        titleStartsWith,
        this.limit,
        offset
      );

      runInAction(() => {
        this.posts = dataPosts.postsList;
        this.totalPosts = dataPosts.totalPosts;
        this.typeSearchRequest = listName;
        this.nameStartsWith = titleStartsWith;
        this.process = 'confirmed';
      });
    } catch (error) {
      this.process = 'error';
      throw error;
    }
  };
}

const postsStore = new PostsStore();

export default postsStore;
