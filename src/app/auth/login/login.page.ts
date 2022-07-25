import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage  {

  accountList: Account[] = [];
  account: Account;
  test: any ='';
  constructor(private http: HttpClient) { }

  login(data){
    this.test = this.http.get<any>('http://localhost/training/api.php?email='+data.email+ '&password='+data.password).subscribe({
      next: resp => {
          console.log('success');
          console.log(resp);
          this.test = resp;
          console.log(resp.customer.password);

      },
      error: error => {
          console.error('There was an error!', error);
      }
  });
    this.account = new Account();
    this.account.firstName = data.firstName;
    this.account.lastName = data.lastName;
    this.account.email = data.email;
    this.account.password = data.password;
    console.log(this.test);

    console.log(this.account);


  }

}
class Account {
  firstName: string;
  lastName: string;
  email: string;
  password: string;

}
