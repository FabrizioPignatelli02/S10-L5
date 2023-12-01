import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  itemArray: Item[] = []

  constructor(private itemSrv: ItemsService) { }

  ngOnInit() {
    this.itemArray = this.itemSrv.recuperaArray()
    return this.itemArray
  }

}
