import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private messageService: MessageService,
    private heroService: HeroService,
    
  ) { }

  getHeros(): void{
    this.heroService.getHeros().subscribe(heroes => this.heroes = heroes) ;
  }
  
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add('HerosComponent: Selected hero id=${hero.id}')
  }

  ngOnInit(): void {
    this.getHeros()
  }

}
