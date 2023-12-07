import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.css'
})
export class HousesComponent implements OnInit { 
    
  httpClient = inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchGOTData();
  }

  fetchGOTData() {
    this.httpClient.get('https://api.gameofthronesquotes.xyz/v1/houses')
    .subscribe((data: any) => {
      console.log(data);
      this.data = data;
    });
  }


}