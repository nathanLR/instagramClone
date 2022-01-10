import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsListService } from 'src/app/services/posts-list.service';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  faHeart = faHeart;
  posts!: Post[];
  
  constructor(private postsListService: PostsListService) { }

  ngOnInit(): void {
    
    this.postsListService.getPosts().subscribe((postsFetched) => this.posts = postsFetched);
  }

}
