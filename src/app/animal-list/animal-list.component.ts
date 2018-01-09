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
      dob:'5 nedelja'
    },
    {
      name:'Sivka',
      species:'krava',
      dob:'6 nedelja'
    },
    {
      name:'Ridjan',
      species:'konj',
      dob:'7 nedelja'
    },
    {
      name:'Mekeke',
      species:'koza',
      dob:'8 nedelja'
    },
    {
      name:'Glavonja',
      species:'ovan',
      dob:'9 nedelja'
    }
   
    ];
  }
  

  ngOnInit() {
  }

}

