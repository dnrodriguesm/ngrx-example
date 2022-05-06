import { ActionReducerMap } from '@ngrx/store';

import { PostEffects } from '@store/effects/post.effects';
import { PostState, postsReducer } from '@store/reducers/post.reducers';

export interface AppState {
  posts: PostState
}

export const appReducer: ActionReducerMap<AppState> = {
  posts: postsReducer
}

export const appEffects = [
  PostEffects
]
