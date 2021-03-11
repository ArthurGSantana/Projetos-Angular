import { ItemService } from './../item.service';
import { Item } from './../cadastro-item.model';
import { Component, OnInit } from '@angular/core';
import { createElementCssSelector } from '@angular/compiler';

@Component({
  selector: 'app-cadastro-item',
  templateUrl: './cadastro-item.component.html',
  styleUrls: ['./cadastro-item.component.css']
})
export class CadastroItemComponent implements OnInit {

  itens: Item = {
    qtde: null!,
    item: '',
    marca: ''
  };

  viewTable: boolean = false

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  createItem(): void{
    this.viewTable=false;
    if(this.itens.qtde!=null && this.itens.item!='' && this.itens.marca!='' && this.itens.qtde>=1){
      this.itemService.create(this.itens).subscribe(()=> {
        this.itemService.showMessage('Item Criado!');
        this.itens.qtde=null!;
        this.itens.item='';
        this.itens.marca='';
      })}
    else {
      this.itemService.showMessage('Preencha Corretamente!');
      this.itens.qtde=null!;
      this.itens.item='';
      this.itens.marca='';
      return
    }
  };

  listItem(): void{
    this.viewTable = true;
  }

}
