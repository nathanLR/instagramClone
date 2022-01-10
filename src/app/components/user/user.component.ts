import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: User = this.appService.getLoggedUser();
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  

}
