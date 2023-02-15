import { Component } from '@angular/core';
import{UsersDataService} from './services/users-data.service'
import { Conditional } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apiApp';
  users:any;
  nursers:any;
  constructor(private userData:UsersDataService){
    userData.users().subscribe((data)=>{
      console.log("data",data);
      this.users=data.users;
      console.log(this.users)
    });
    userData.nusers().subscribe((ndata)=>{
     this.nursers=ndata.products;
    })
  }
  // newData:any;
  newData=[{id:1,name:'mit',grade:'A'},{id:2,name:'kaushik',grade:'B'}];
}
