import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  itemArray!: Item[]
  i: number=0;

  constructor(private itemSrv: ItemsService) { }

  ngOnInit() {
    this.itemArray = this.itemSrv.recuperaArray()
  }

  addItem(it:any){
    this.i++
    const value = it.value
    const completed = false
    const id = this.i


    let objItem: Item = {id:id, title:value, completed:completed}
    this.itemArray.push(objItem)
    console.log("obj", objItem)
    console.log("array", this.itemArray)

    it.value=""

  }

  itemCompleted(index:number){
    this.itemArray[index].completed = true;
  }


}
