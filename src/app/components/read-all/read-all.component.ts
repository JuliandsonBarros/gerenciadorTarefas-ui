import { Component, OnInit } from '@angular/core';
import { Tidy } from 'src/app/models/tidy';

import { TidyService } from 'src/app/services/tidy.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.scss']
})
export class ReadAllComponent implements OnInit {

  closed = 0;

  list: Tidy[] = [];
  listaFinalizados: Tidy[] = [];

  constructor(private service: TidyService) { }

  ngOnInit(): void {
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(tidy =>{
        if(tidy.finalizado){
          this.listaFinalizados.push(tidy);
        }else{
          this.list.push(tidy);
        }
      })
      this.closed = this.listaFinalizados.length;
    })
  }

  delete(id: any): void{
      this.service.delete(id).subscribe((resposta) =>{
        if(resposta == null){
          this.service.message('Tarefa excluida com sucesso!');
          this.list = this.list.filter(tidy => tidy.id !== id);
        }
      })
  }

}
