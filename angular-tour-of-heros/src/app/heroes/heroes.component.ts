import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../hero';
import { HEROS } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROS;
  selectedHero?: Hero;

  constructor(
    private formsModule: FormsModule
  ) { }
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  ngOnInit(): void {
  }

}
