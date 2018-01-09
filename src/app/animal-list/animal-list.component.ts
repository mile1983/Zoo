import { Component, OnInit } from '@angular/core';
import {Animal} from '../models/animal';
@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals:Array<Object>;

  constructor() { 
    this.animals = [  
      new Animal('krava','Zujka','06.01.2001'),
      new Animal('koza','Mujka','06.01.2001'),   
      new Animal('magarac','Vujka','06.01.2001'),   
      new Animal('morz','Kujka','06.01.2001'), 
      new Animal('ajkula','Cujka','06.01.2001')  
      
   
   
    ];
  }
  removeAnimal(animal){
    
    let index = this.animals.indexOf(animal);
    this.animals.splice(index,1);
    
    // console.log(animal);

   }
   moweToTop(animal){
      this.removeAnimal(animal);
      this.animals.unshift(animal);

   }

  ngOnInit() {
  }

}

