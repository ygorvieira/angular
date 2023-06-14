import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Teste 1',
      autoria:  'Ygor',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Teste 2',
      autoria:  'Ygor',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Teste 3',
      autoria:  'Ygor',
      modelo: 'modelo3'
    },
    {
        conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Diuretics paradis num copo é motivis de denguis. Atirei o pau no gatis, per gatis num morreus. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim.',
        autoria: '',
        modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
