import { Component } from '@angular/core';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { Pokemon } from '../pokemon2';
import { POKEMONS } from '../mock-pokemon-list2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    templateUrl: './list-pokemon.component.html',
    styles: ``,
    imports: [PokemonTypeColorPipe]
})
export class ListPokemonComponent {
pokemonListe: Pokemon[]= POKEMONS ;


constructor(private router : Router){}

goPokemonDetail(pokemon:Pokemon){
  this.router.navigate(["/pokemon",pokemon.id])
}
}
