import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage  {

  // accountList: Account[] = [];
  // account: Account;
  info: any ='';
  
  email = "" ;
  password ="";

  constructor(private http: HttpClient,
              private storage: Storage,
              private router: Router){ }

  
    login(data){
    this.info = this.http.get<any>('http://localhost/training/api.php?email='+data.email+ '&password='+data.password).subscribe({
      next: resp => {
          this.info = resp;
          console.log(resp.customer);

          //set the variable value the same to the response of the api

        
          this.storage.create();
          this.storage.set('email', resp.customer.email);
          this.storage.get('email').then((email)=>{
          this.email= email;
          console.log("This is from the inside " + this.email);
          
          // console.log('Test value is: ',email);
          });
          //set the variable value the same to the response of the api 
          this.storage.create();
          this.storage.set('password', resp.customer.password);
          this.storage.get('password').then((password)=>{
          this.password=password;
          this.router.navigate(['/home']);
          // console.log('Test value is: ',password);
          });
          
          console.log("This is from the outside " + this.email);
          

        //   if(data.email === this.email && data.password === this.password){
        //      console.log("redirect to home");
 
        //   }
        //  else{
        //   console.log("wrong email or password");
        //    this.router.navigate(['/login']);
        //  }

         
          this.storage.create();
          this.storage.set('first_name', resp.customer.person_first_name);
          this.storage.get('first_name').then((person_first_name)=>{
          // console.log('Test value is: ',person_first_name);
          });

          this.storage.create();
          this.storage.set('last_name', resp.customer.person_last_name);
          this.storage.get('last_name').then((person_last_name)=>{
          // console.log('Test value is: ',person_last_name);
          });

          this.storage.create();
          this.storage.set('person_id', resp.customer.person_id);
          this.storage.get('person_id').then((person_id)=>{
          
          });
          
        

  

      },
      error: error => {
          console.error('There was an error!', error);
      }

   });



    // this.account = new Account();
    // this.account.firstName = data.firstName;
    // this.account.lastName = data.lastName;
    // this.account.email = data.email;
    // this.account.password = data.password;
    // console.log(this.info);

    // console.log(this.account);
  }

}
// class Account {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;

// }
