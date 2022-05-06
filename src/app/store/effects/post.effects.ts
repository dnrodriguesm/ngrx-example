import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import * as fromPostsAction from '@store/actions/post.actions';
import { PostService } from '@shared/services/post.service';

@Injectable()
export class PostEffects {
  createPost$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromPostsAction.PostsActionEnum.CREATE_POST),
      exhaustMap(({ payload }) => this.postService.createPost(payload)
        .pipe(
          map(
            (payload: any) => fromPostsAction.CreatePostSuccess({ payload }),
            catchError(error => of(fromPostsAction.CreatePostFail({ error })))
          )
        )
      )
    )
  )
  loadPosts$ = createEffect(
    () => this.actions$.pipe(
      ofType(fromPostsAction.PostsActionEnum.LOAD_POSTS),
      exhaustMap(() => this.postService.loadPosts()
        .pipe(
          map(
            (payload: any) => fromPostsAction.LoadPostsSuccess({ payload }),
            catchError(error => of(fromPostsAction.LoadPostsFail({ error })))
          )
        )
      )
    )
  )

  constructor(
    private actions$: Actions,
    private postService: PostService) {}
}
