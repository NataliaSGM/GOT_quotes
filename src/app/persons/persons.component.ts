import { Component, OnInit, Output, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet, RouterLink, Router} from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [HttpClientModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit {     
  characters: any[] = [];
  searchCharacter = '';
  characterNotFound = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchGOTDataCharacters();
  }

  fetchGOTDataCharacters(): void {
    this.httpClient.get('https://api.gameofthronesquotes.xyz/v1/characters')
      .subscribe((data: any) => {
        this.characters = data;
      });
  }

  search(): void {
    this.httpClient.get(`https://api.gameofthronesquotes.xyz/v1/character/${this.searchCharacter.toLowerCase()}`)
      .subscribe((data: any) => {
        if (data.length === 0) {
          this.characterNotFound = true;
        } else {
          this.characterNotFound = false;
          this.characters = [data[0]]; 
          console.log(this.characters);
        }
      });
  }

  displayAll(): void {
    this.fetchGOTDataCharacters();
  }

  getDetails(slug: string): void {
    this.router.navigate(['/character', slug]);
    
  }
 
    
  }
