import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FooterComponent, HeaderComponent ],
  styleUrls: ['./app.component.css'], 
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'GOT';
}
