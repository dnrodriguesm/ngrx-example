import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PostFacade } from '@store/facades/post.facade';
import { getPosts } from '@store/selectors/post.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  posts$ = this.store.select(getPosts);

  constructor(
    private store: Store,
    private postFacade: PostFacade) {}

  ngOnInit(): void {
    this.postFacade.loadPosts();
    this.postFacade.createPost({
      userId: 1,
      title: "Danilo rodrigues",
      body: "Aprendendo NgRx"
    });
  }
}
