import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list2';
import { Pokemon } from './pokemon2';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html'

})


export class AppComponent implements OnInit {

  pokemonListe : Pokemon[] = POKEMONS
  pokemonSelected : Pokemon |undefined;

  ngOnInit(){
    console.table(this.pokemonListe);
  }


  selectPokemon(pokemonID : string ){
    const id = +pokemonID
    const pokemon : Pokemon|undefined = this.pokemonListe.find(pokemon => pokemon.id== +pokemonID)
    if (pokemon){
      console.log(`vous avez cliqué sur ${pokemon.name}`);      
      this.pokemonSelected = pokemon;
    }
    else{
      console.log(`vous avez demandé sue un pokemon non, exitant`);  
      this.pokemonSelected = pokemon;
    }
  }

}
