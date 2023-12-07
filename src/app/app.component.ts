import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ],
  styleUrls: ['./app.component.css'], 
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'GOT';
}
