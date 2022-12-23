import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tidy } from 'src/app/models/tidy';
import { TidyService } from 'src/app/services/tidy.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  tidy: Tidy = {
    titulo: '',
    descricao: '',
    dataFinalizar: new Date(),
    finalizado: false
  }

  constructor(private router: Router, private service: TidyService) { }

  ngOnInit(): void {
  }

  create(): void{
   this.formatarData();
   this.service.create(this.tidy).subscribe((resposta) => {
    this.service.message('Tarefa criada com sucesso');
    this.router.navigate(['']);
    })
  }

  cancel(): void{
    this.router.navigate(['']);
  }

  formatarData(): void{
    let data = new Date(this.tidy.dataFinalizar);
    this.tidy.dataFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

}
