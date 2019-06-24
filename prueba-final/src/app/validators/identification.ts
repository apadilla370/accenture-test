import { FormControl } from '@angular/forms';
import { DbConectionService } from '../db-conection.service';

/* Custom validator to check if the identificaton number already exists in the database.
 this validator couldn't be made because I wasn't able to access the data using GET request CHECK THE REPORT DOCUMENT IN THE REPOSITORY */

export class AgeValidator {
    constructor(private dbService: DbConectionService) {}
    
}
