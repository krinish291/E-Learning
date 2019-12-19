import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import {IUSer} from '../../Iuser';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  firstname:string;
  lastname:string;
  email:string;
  phone:number;
    user:any;
  constructor(private apiservice: ApiService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.email=this.route.snapshot.paramMap.get('email');
    this.apiservice.FindUser(this.email).subscribe(res => { this.user=res;
      console.log(this.user);
      this.firstname=this.user.firstname;
       this.lastname=this.user.lastname;
       this.email=this.user.email;
       this.phone=this.user.phone;
      });
  }

  
  update(user:IUSer){
    this.apiservice.putupdate(user).subscribe(res => res);
    alert('user updated!')
  }
}
