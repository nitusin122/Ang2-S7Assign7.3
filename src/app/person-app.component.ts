import { Component } from '@angular/core';
import { Person } from './Models/Person';


@Component({
    selector: 'person-root',
    templateUrl: './Views/person-app.component.html',
    styleUrls: ['./person-app.component.css']
    //encapsulation: ViewEncapsulation.Emulated
})

export class PersonComponent {
        
    //Public Variables */
    personObj: Person = new Person();    
    submitted:boolean = false;
    
    //people array
    people: Array<Person> = new Array<Person>();
    
    /**Add Person Names in people Array*/
   AddPeople()
   {
        this.submitted = true;
        this.people.push(this.personObj);
        this.personObj = new Person();
    }
}