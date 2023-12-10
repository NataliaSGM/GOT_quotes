import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.css'
})
export class QuotesComponent implements OnInit { 
    
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchGOTData();
  }

  fetchGOTData() {
    this.httpClient.get('https://api.gameofthronesquotes.xyz/v1/random/5')
    .subscribe((data: any) => {      
      this.data = data;
    });
  }


}