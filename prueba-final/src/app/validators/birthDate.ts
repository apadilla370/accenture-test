import { FormControl } from '@angular/forms';

/* Custom validator to check the age of the person at the moment he/she is filling the register form */
export class AgeValidator {
    static isValid(control: FormControl): any {
        var birthDate = new Date(control.value);
        var birthTimeStamp = birthDate.getTime()/31536000000;
        var currentDateTimeStamp = new Date().getTime()/31536000000;
        var age = (currentDateTimeStamp-birthTimeStamp);
        /*I didn't find a 100% accure way to calculate the age of the person, so there is a error margin of about 5 days around the birth date of the person.*/
        if(age<18){
            return{
                "You must be 18 or older": true
            };
        }

        return null;
    }

}