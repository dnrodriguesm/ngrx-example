import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from '@store/reducers/post.reducers';

const getPostsState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(
  getPostsState,
  (state: PostState) => state.posts
)

export const getPost = createSelector(
  getPostsState,
  (state: PostState) => state.post
)

export const getError = createSelector(
  getPostsState,
  (state: PostState) => state.error
)
