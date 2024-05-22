import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list2';
import { Pokemon } from './pokemon2';
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { RouterModule,Route, RouterOutlet } from '@angular/router';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: 'app.component.html',
    imports: [PokemonTypeColorPipe, RouterOutlet]
})



export class AppComponent {  

}
