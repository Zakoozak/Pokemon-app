import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon2';
import { POKEMONS } from './mock-pokemon-list2';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[]{
    return POKEMONS
  }

  getPokemonById(pokemonId: number): Pokemon|undefined{
  return POKEMONS.find(pokemon=> pokemon.id == pokemonId)
  }

  getPokemonTypeList():string[]{
    return [
      "Plante",
      "Feu",
      "Eau",
      "Roche", 
      "Acier", 
      "Sol",
      "Electrik",
      "Fée", 
      "Psy",
      "Spectre",
      "Ténbèbres",
      "Vol",
      "Normal", 
      "Poison",
      "Dragon",
      "Combat",
      "Insecte",
      "Glace"
   ]
  }
}
