import { Component } from "@angular/core";
import { PersonsService } from "./persons.service";

@Component({
  selector:'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent{
  // Property Binding
  // onCreatePerson(nombre: string){
  //   console.log('persona creada ' + nombre)
  // }

  //Two-Way Binding
  // @Output() createPerson = new EventEmitter<string>()
  // enteredPerson = ''

  // onCreatePerson(){
  //   console.log('persona creada: ' + this.enteredPerson)
  //   this.createPerson.emit(this.enteredPerson)
  //   this.enteredPerson = ''
  // }

  // Using Services
  enteredPerson = ''

  constructor( private personsService: PersonsService){}

  onCreatePerson(){
    console.log('persona creada: ' + this.enteredPerson)
    this.personsService.addPerson(this.enteredPerson)
    this.enteredPerson = ''
  }
}
