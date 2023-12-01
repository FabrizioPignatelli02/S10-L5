import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemArray: Item[] = []

  constructor() { }

  recuperaArray(){
    return this.itemArray
    console.log("array generale:", this.itemArray)
  }

}
