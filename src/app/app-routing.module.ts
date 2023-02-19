import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PersonInputComponent } from "./Components/persons-input.component";
import { PersonsComponent } from "./Components/persons.component";

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonInputComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule{}
