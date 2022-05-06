import { createAction, props } from '@ngrx/store';

import { Post } from '@core/models/post.model';

export const enum PostsActionEnum {
  LOAD_POSTS = '[LOAD_POSTS] LOAD POSTS',
  LOAD_POSTS_SUCCESS = '[LOAD_POSTS_SUCCESS] LOAD POSTS SUCCESS',
  LOAD_POSTS_FAIL = '[LOAD_POSTS_FAIL] LOAD POSTS FAIL',

  CREATE_POST = '[CREATE_POST] CREATE POST',
  CREATE_POST_SUCCESS = '[CREATE_POST_SUCCESS] CREATE POST SUCCESS',
  CREATE_POST_FAIL = '[CREATE_POST_FAIL] CREATE POST FAIL',
}

// Load Posts
export const LoadPosts = createAction(
  PostsActionEnum.LOAD_POSTS
)

export const LoadPostsSuccess = createAction(
  PostsActionEnum.LOAD_POSTS_SUCCESS,
  props<{ payload: Array<Post> }>()
)

export const LoadPostsFail = createAction(
  PostsActionEnum.LOAD_POSTS_FAIL,
  props<{ error: string }>()
)

// Create Post
export const CreatePost = createAction(
  PostsActionEnum.CREATE_POST,
  props<{ payload: Post }>()
)

export const CreatePostSuccess = createAction(
  PostsActionEnum.CREATE_POST_SUCCESS,
  props<{ payload: Post }>()
)

export const CreatePostFail = createAction(
  PostsActionEnum.CREATE_POST_FAIL,
  props<{ error: string }>()
)
