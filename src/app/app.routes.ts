import { Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CharacterComponent } from './character/character.component';

export const routes: Routes = [   
  {
    path: 'houses', title: 'Houses', component:  HousesComponent
  },
  {
    path: 'persons', title: 'Persons', component:  PersonsComponent
  },
  {
    path: 'character/:name', title: 'Character', component: CharacterComponent
  }, 
  {
    path: 'quotes', title: 'Quotes', component:  QuotesComponent
  }
  
];

