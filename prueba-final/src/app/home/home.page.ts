import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbConectionService } from '../db-conection.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public logInForm: FormGroup;

  /* Validation group for the sign up form (Name fields only accept letterse) */
  constructor(public navCtrl: NavController, public dbService:DbConectionService, public formBuilder: FormBuilder) { 
    this.logInForm = formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])),
    });
  }

  /* This method links this page to the register page */
  goToRegister(){
    this.navCtrl.navigateRoot('/register');
  }

  /* Method used to test the GET request
  ionViewDidEnter(){
    this.dbService.getData().subscribe(data => {
      console.log("Formated Data");
      console.log(data);
    })
  } */
  /* Log In doesn't actually work, tihs entirepage (in this case) is just a starting point to get and return from the register form  */
  logIn(formData){
    console.log(formData);
  }

}
