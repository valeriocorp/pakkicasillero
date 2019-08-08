import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  guardarPaquete(f:NgForm){

    console.log(f.valid);
    console.log(f.value);
  }

}
