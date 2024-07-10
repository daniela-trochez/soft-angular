import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola desde app component.ts';
  tasks = [
    'instalar',
    'crear proyecto',
    'fin'
  ];
  name = signal ('nicolas');
  img = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png';

  person ={
    name:'raul',
    age :  23,
    avatar : 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'
  }

  clickHandler(){
    alert('hola')
  }

  changeHandler(event: Event){
    // console.log(event);
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

}
