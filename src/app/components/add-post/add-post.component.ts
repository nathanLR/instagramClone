import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostsListService } from 'src/app/services/posts-list.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postToSend!: Post;
  imageFile!: File;
  addPostForm = new FormGroup({
    description: new FormControl(""),
    location: new FormControl("")
  })

  constructor(private datePipe: DatePipe, private postListService: PostsListService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any){
    this.imageFile = event.target.files[0];
  }

  onSubmit(){
    this.postToSend = {
      id: 12,
      userName: "Nathan",
      image: this.imageFile.name,
      userImage: "assets/pp.PNG",
      description: this.addPostForm.value.description,
      datePosted: ""+new Date(),
      location: this.addPostForm.value.location,
      likesAmount: 0 
    }
    //console.log(this.addPostForm.value)
    console.log(this.postToSend);

    this.postListService.addPost(this.postToSend).subscribe();


  }



  

}
