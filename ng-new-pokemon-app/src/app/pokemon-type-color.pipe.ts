import { Pipe, PipeTransform } from '@angular/core';
import { before } from 'node:test';

@Pipe({
  name: 'pokemonTypeColor',
  standalone: true
})

export class PokemonTypeColorPipe implements PipeTransform {

  transform(type : string): string  {
    // let color : string ="chip pas de type";  

    //  switch (type){
    //   case "Acier":
    //     color ="#60a2b9"
    //     break; 
    //   case "Combat": 
    //     color = "#ff8100";
    //     break; 
    //   case "Dragon": 
    //     color = "#4f60e2"
    //     break
    //   case "Eau":
    //     color ="#2481f0";
    //     break;
    //   case "Electrique":
    //     color = "#fac100";
    //     break;
    //   case "Fée":
    //     color="#ef71f0";
    //     break; 
    //   case "Feu":
    //     color="#e72324";
    //     break; 
    //   case "Glace":
    //     color="#3dd9ff";
    //     break; 
    //   case "Insecte":
    //     color="#92a212";
    //     break; 
    //   case "Normal":
    //     color="#a0a2a0";
    //     break; 
    //   case "Plante":
    //     color="#3da224";
    //     break; 
    //   case "Poison":
    //     color="#923fcc";
    //     break; 
    //   case "Psy":
    //     color="#ef3f7a";
    //     break; 
    //   case "Roche":
    //     color="#b0ab82";
    //     break; 
    //   case "Sol":
    //     color="#92501b";
    //     break; 
    //   case "Spectre":
    //     color="#713f71";
    //     break; 
    //   case "Ténèbres":
    //     color="#ffffff";
    //     break; 
    //   case "Vol":
    //     color="#82baef";
    //     break;    
                                               
    //  }
    //  return "chip " + color;
    return "assets/types/"+type.toLowerCase()+".png"  
    }

}
