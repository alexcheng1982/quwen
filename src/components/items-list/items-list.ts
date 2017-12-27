import { Component, Input } from '@angular/core';
import { ItemsList } from '../../models/item';

@Component({
  selector: 'quwen-items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListComponent {

  @Input() itemsList: ItemsList;

}
