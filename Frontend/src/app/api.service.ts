import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {IUSer} from '../Iuser'
import  { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  
  loginUser(body:any){
    return this.http.post("http://localhost:3000/login", body,{
          observe:'body',
          headers: new HttpHeaders().append('Content-Type','application/json')
   })
 }


registerUser(body:any){
  return this.http.post("http://localhost:3000/signup", body,{
        observe:'body',
        headers: new HttpHeaders().append('Content-Type','application/json')
 })
}

//disply user
userdisplay()
  {
    console.log("in user detail service");
    return this.http.get('http://localhost:3000/display')  

  }

  //delete user
  deleteuser(data:any){
    console.log("in delete user");
    console.log(data)
    this.http.delete('http://localhost:3000/deleteuser'+"/"+data).subscribe((res)=>{console.log(res);});
 }

 //finduser
 FindUser(body:any){
  return this.http.get("http://localhost:3000/user/"+ body,{
        observe:'body',
        headers: new HttpHeaders().append('Content-Type','application/json')
 })
}

//update
putupdate(user:IUSer):Observable<any>{
  return this.http.put("http://localhost:3000/updateuser",user);
}

//feedback
feedback(body:any){
  return this.http.post("http://localhost:3000/home", body,{
        observe:'body',
        headers: new HttpHeaders().append('Content-Type','application/json')
 })
}
//feedback display
feedbackdisplay()
  {
    console.log("in user detail service");
    return this.http.get('http://localhost:3000/feedbackdisplay')  

  }

  //contribution
  mycon(mydata):Observable<any>{
    return this.http.post("http://localhost:3000/mycon",mydata);
  }

  //contribution display
  condisplay()
  {
    console.log("in contribution detail details");
    return this.http.get('http://localhost:3000/condisplay')  

  }

}