import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prealertas',
  templateUrl: './prealertas.component.html',
  styles: []
})
export class PrealertasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardarPreAlerta(f: NgForm){
     
    console.log(f.valid);
    console.log(f.value);
  }

}
