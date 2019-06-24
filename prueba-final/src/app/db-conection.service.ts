import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

/* This service handles all connections to the end point */

/* Interface for formating the data returned by the get request */
export interface Person{
    birthdate : string,
    firstname : string,
    identification : string,
    lastname : string
}

@Injectable()

export class DbConectionService {
  customers : Person[]=[];

  constructor( @Inject(HttpClient) public http:HttpClient) {
    
  }

  /* GET request method, i can print the data using cosole.log() but i didn't manage to access the data from outside the request CHECK THE REPORT DOCUMENT IN THE REPOSITORY */
  getData()  {

    return this.http.get('https://testbankapi.firebaseio.com/clients.json')
      .pipe(
        map((res: any) => {
          console.log('before', res);
          return res.data.children;
        })
      );

    
    /* Get method using customers
    this.http.get("https://testbankapi.firebaseio.com/clients.json").subscribe((res)=>{
      console.log(res);
      //this.customers = res;
    },  error => {
      console.log('Error', error);
    });*/
  }

  /* Send data method via POSTS */
  postData(data){
    this.http.post('https://testbankapi.firebaseio.com/clients.json', data).toPromise().then(response => {
      console.log(response);
    }, error => {
      console.log('Error', error);
    });
  }
}


  

