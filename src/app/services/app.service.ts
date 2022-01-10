import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  loggedUser: User = {
    id:1,
    userName: "nathan",
    eMail: "nathan.leroux3@gmail.com",
    password: "Nathandu13",
    postsLiked: [2,5,7],
    profilePicture: "pp.PNG"
    
  };
  constructor() { }

  getLoggedUser(): User{
    return this.loggedUser;
  }
}
