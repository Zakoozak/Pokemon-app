import { Component,OnInit } from '@angular/core';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { Pokemon } from '../pokemon2';
import { POKEMONS } from '../mock-pokemon-list2';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-list-pokemon',
    standalone: true,
    templateUrl: './list-pokemon.component.html',
    styles: ``,
    imports: [PokemonTypeColorPipe]
})


export class ListPokemonComponent implements OnInit {
pokemonListe: Pokemon[]

constructor(
  private router : Router,
  private pokemonService: PokemonService)
  {  }
  
ngOnInit() {
  this.pokemonListe= this.pokemonService.getPokemonList()
}

goPokemonDetail(pokemon:Pokemon){
  this.router.navigate(["/pokemon",pokemon.id])
}
}
