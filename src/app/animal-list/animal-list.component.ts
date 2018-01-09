import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals:Array<Object>;

  constructor() { 
    this.animals = [      
    {
      name:'Belka',
      species:'svinja',
      dob:'01.01.2001'
    },
    {
      name:'Sivka',
      species:'krava',
      dob:'02.01.2001'
    },
    {
      name:'Ridjan',
      species:'konj',
      dob:''
    },
    {
      name:'Mekeke',
      species:'koza',
      dob:'04.01.2001'
    },
    {
      name:'Glavonja',
      species:'ovan',
      dob:'05.01.2001'
    }
   
    ];
  }
  removeAnimal(animal){
    
    let index = this.animals.indexOf(animal);
    this.animals.splice(index,1);
    
    // console.log(animal);

   }
  

  ngOnInit() {
  }

}

