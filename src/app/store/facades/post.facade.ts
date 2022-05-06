import { Injectable } from '@angular/core';
import { Post } from '@core/models/post.model';
import { Store } from '@ngrx/store';

import * as fromPostsAction from '@store/actions/post.actions';

@Injectable({ providedIn: 'root' })
export class PostFacade {
  constructor(private store: Store) {}

  loadPosts() {
    this.store.dispatch(fromPostsAction.LoadPosts())
  }

  createPost(record: Post) {
    this.store.dispatch(fromPostsAction.CreatePost({ payload: record }))
  }
}
