import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, RouterLink],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}
  house: any;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.getHouseDetails(name);      
    });       
  }

  getHouseDetails(name: string): void {
    this.httpClient.get(`https://api.gameofthronesquotes.xyz/v1/house/${name}`)
      .subscribe((data: any) => {
        this.house = data[0];            
      });
  }

  getDetails(slug: string): void {
    this.router.navigate(['/character', slug]);
    
  }

  goBack(): void {
    this.router.navigate(['/houses']);;
  }

}
