import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedUser: User = this.appService.getLoggedUser();
  
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    
  }

}
