import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})

export class CharacterComponent {  
  character: any;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.getCharacterDetails(name);
    });
  }

  getCharacterDetails(name: string): void {
    this.httpClient.get(`https://api.gameofthronesquotes.xyz/v1/character/${name}`)
      .subscribe((data: any) => {
        this.character = data[0];
        console.log(data[0]);
      });
  }

  }
  