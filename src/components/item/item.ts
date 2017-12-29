import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'quwen-item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  @Input() item: Item;

  @Output() onOpen = new EventEmitter<string>();

  open(url: string): void {
    this.onOpen.emit(url);
  }
}
