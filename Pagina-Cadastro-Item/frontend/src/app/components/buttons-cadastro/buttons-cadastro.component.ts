import { CadastroItemComponent } from './../../cadastros/cadastro-item/cadastro-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-cadastro',
  templateUrl: './buttons-cadastro.component.html',
  styleUrls: ['./buttons-cadastro.component.css']
})

export class ButtonsCadastroComponent implements OnInit {

  constructor(private CadastroItem: CadastroItemComponent) { }

  ngOnInit(): void {
  }

  createItemBtn(): void{
    this.CadastroItem.createItem();
  };

  listItemBtn(): void {
    this.CadastroItem.listItem();
  };


}
