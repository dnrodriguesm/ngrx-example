import { Action, createReducer, on } from '@ngrx/store';

import * as fromPostsAction from '@store/actions/post.actions';
import { Post } from '@core/models/post.model';

export interface PostState {
  error: string | null;
  post: Post | null;
  posts: Array<Post>;
}

export const initialState: PostState = {
  error: null,
  post: null,
  posts: []
}

const _postReducer = createReducer(
  initialState,
  on(
    fromPostsAction.LoadPostsSuccess,
    (state, { payload }) => ({ ...state, posts: payload, error: null })
  ),
  on(
    fromPostsAction.LoadPostsFail,
    (state, { error }) => ({ ...state, error })
  ),
  on(
    fromPostsAction.CreatePostSuccess,
    (state, { payload }) => ({ ...state, posts: [...state.posts, payload], error: null })
  ),
  on(
    fromPostsAction.CreatePostFail,
    (state, { error }) => ({ ...state, error })
  )
)


export function postsReducer(state = initialState, action: Action) {
  return _postReducer(state, action);
}
