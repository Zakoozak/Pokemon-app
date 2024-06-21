import { Injectable } from '@angular/core';
import { POKEMONS } from './pokemon/mock-pokemon-list2';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDB(){
    return {POKEMONS}
  }
  
}
