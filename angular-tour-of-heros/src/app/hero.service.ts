import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROS } from './mock-heroes';
import { Observable, of  } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Hero[]> {
    const heroes = of(HEROS);
    this.messageService.add('HeroService: fetched heroes')
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
