import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list2';
import { Pokemon } from '../pokemon2';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router){}
  pokemonList: Pokemon[];
  pokemon : Pokemon |undefined; 


  ngOnInit(){
    this.pokemonList= POKEMONS
    const pokemonId:string|null= this.route.snapshot.paramMap.get("id")

    if (pokemonId){
      this.pokemon  = this.pokemonList.find(pokemon => pokemon.id == +pokemonId)
    }
  }
  goPokemonList(){
    this.router.navigate(["/pokemons"]);
  }

  goNextPokemon(){
    if (this.pokemon){
      let newId:number = this.pokemon.id+1
      this.router.navigate( ["/pokemon/"+ newId])
    }
  }
  goPreviousPokemon(){
    if (this.pokemon){
      let newId:number = this.pokemon.id-1
      this.router.navigate( ["/pokemon/"+ newId])
    }
  }
}
