import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet, RouterLink, Router} from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})

export class CharacterComponent implements OnInit {  
  character: any;
  randomQuote: string = '';


  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private router: Router) {}
  

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
        this.getRandomQuote();
      });
  }

  getRandomQuote(): void {
    const quotes = this.character.quotes;
    if (quotes.length === 1) {
      this.randomQuote = quotes[0];
    } else {
       this.randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    }    
  }

  goBack(): void {
    this.router.navigate(['/persons']);;
  }
  }
  