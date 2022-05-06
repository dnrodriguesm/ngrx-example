import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';

import { Post } from '@core/models/post.model';

const { baseUrl } = environment;

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  loadPosts() {
    return this.http.get(`${baseUrl}posts`)
  }

  createPost(record: Post) {
    return this.http.post(`${baseUrl}posts`, record)
  }
}
