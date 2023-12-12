import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { CharacterComponent } from './character/character.component';
import { QuotesComponent } from './quotes/quotes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent, HeaderComponent, HousesComponent, PersonsComponent, CharacterComponent, HousesComponent, QuotesComponent],
  styleUrls: ['./app.component.css'], 
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'GOT';
}
