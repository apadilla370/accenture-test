import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DbConectionService } from '../db-conection.service';
import { AgeValidator } from  '../validators/birthDate';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  
  public signUpForm: FormGroup;

  constructor(public navCtrl: NavController, public autheservice:DbConectionService, public formBuilder: FormBuilder) {
    /* Validation group for the sign up form (Name fields only accept letters, identification field only accepts numbers 
      and birth date field only accepts dates from 18 years or before) */
    this.signUpForm = formBuilder.group({
      firstName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])),
      lastName: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])),
      birthDate: new FormControl('', Validators.compose([Validators.required, AgeValidator.isValid])),
      identification: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(30), Validators.pattern(/^-?(0|[1-9]\d*)?$/)])),
    });

  }

  /* This method sends the form data to the db via POST adn then links to the log in page.
  Because I couldn't access the data using GET request it ws not possible to check if a user already exists int he database, 
  but the POST is able to sed the information and store it CHECK THE REPORT DOCUMENT IN THE REPOSITORY */
  saveUser(formData){
    var jsonFile = JSON.stringify({birthdate:formData.value.birthDate, 
      firstname:formData.value.firstName, 
      identification:formData.value.identification, 
      lastname:formData.value.lastName
    });
    this.autheservice.postData(jsonFile);
    this.navCtrl.navigateRoot('/home');
    
  }

}
