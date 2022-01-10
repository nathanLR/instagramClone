import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../models/post.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {
  // private posts!: Post[];

  private mainUrl: string = "http://localhost:3000/posts";

  constructor(private http: HttpClient) { 
    
  }

  getPosts(): Observable<Post[]>{
    
    return this.http.get<Post[]>(this.mainUrl);
  }



  getPostById(postId:number): Observable<Post>{
    const url = `${this.mainUrl}/${postId}`;
    return this.http.get<Post>(url);

  }
  deletePost(postId: number): Observable<Post>{
    const url = `${this.mainUrl}/${postId}`;
    return this.http.delete<Post>(url);
  }

  updatePost(post: Post): Observable<Post>{
    const url = `${this.mainUrl}/${post.id}`;
    return this.http.put<Post>(url, post);
  }

  addPost(post: Post): Observable<Post>{
    return this.http.post<Post>(this.mainUrl, post);
  }

}
