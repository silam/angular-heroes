import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

// register providers (to create service) with injector 
@Injectable({
  providedIn: 'root' 
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
