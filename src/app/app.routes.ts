import { Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [   
  {
    'path': 'home', 'title': 'Home', component: HomeComponent
  },
  {
    'path': 'houses', 'title': 'Houses', component:  HousesComponent
  },
  {
    'path': 'persons', 'title': 'Persons', component:  PersonsComponent
  },
  {
    'path': 'character/:name', 'title': 'Character', component: CharacterComponent
  }, 
  {
    'path': 'house/:name', 'title': 'House', component: HouseComponent
  }, 
  {
    'path': 'quotes', 'title': 'Quotes', component:  QuotesComponent
  },
  {
    'path': '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    'path': '**', component:  PageNotFoundComponent
  }
  
];

