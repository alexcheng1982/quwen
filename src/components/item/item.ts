import { Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'quwen-item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  @Input() item: Item;

}
