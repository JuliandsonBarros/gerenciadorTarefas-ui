import { Component, OnInit } from '@angular/core';
import { tidy } from 'src/app/models/tidy';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: tidy[] = [
    {
      titulo: "teste",
      dataFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: 'teste',
      dataFinalizar: new Date,
      finalizado: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
