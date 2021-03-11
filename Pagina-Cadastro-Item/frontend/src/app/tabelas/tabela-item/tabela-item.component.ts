import { CadastroItemComponent } from './../../cadastros/cadastro-item/cadastro-item.component';
import { Item } from './../../cadastros/cadastro-item.model';
import { ItemService } from './../../cadastros/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-item',
  templateUrl: './tabela-item.component.html',
  styleUrls: ['./tabela-item.component.css']
})
export class TabelaItemComponent implements OnInit {

  itemlist!: Item[];
  displayedColumns = ['Quantidade', 'Item', 'Marca', 'Deletar']

  constructor(private itemService: ItemService, private cadastro: CadastroItemComponent) { }

  ngOnInit(): void {
    this.itemService.read().subscribe(itens => {
      this.itemlist = itens;
    });
  };

  deletar(row: string): void{
    this.itemService.delete(row).subscribe(()=>{
      this.itemService.showMessage('Item Deletado!');
    });
    this.cadastro.viewTable = false;
    setTimeout(() => {
      this.cadastro.viewTable = true;
    }, 10);
  };

}
