import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLink, Router} from '@angular/router';


@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent implements OnInit { 
      
  houses: any[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchGOTData();
  }

  fetchGOTData() {
    this.httpClient.get('https://api.gameofthronesquotes.xyz/v1/houses')
    .subscribe((data: any) => {
      console.log(data);
      this.houses = data;
    });
  }

  getHouseDetails(slug: string): void {
    this.router.navigate(['/house', slug]);
    
  }


}