import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsListService } from 'src/app/services/posts-list.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post!: Post;
  isLiked: boolean = false;


  constructor(private route: ActivatedRoute, private postListService: PostsListService, private router: Router) { }

  ngOnInit(): void {

    const postReceivedId  = +this.route.snapshot.params['id'];
    this.postListService.getPostById(postReceivedId).subscribe((postRceived) => this.post = postRceived);
  }

  likeButtonPressed():void{


    if(this.isLiked){
      this.post.likesAmount--;
      this.isLiked = !this.isLiked;
    }else{
      this.post.likesAmount++;
      this.isLiked = !this.isLiked;
    }

    this.postListService.updatePost(this.post).subscribe();

  }

  deleteButtonPressed(){
    this.postListService.deletePost(this.post.id).subscribe(() => this.router.navigateByUrl(""));
  }

}
