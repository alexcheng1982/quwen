import { Component, Input } from '@angular/core';
import { ItemsList } from '../../models/item';
import { OpenPageService } from "../../services/OpenPageService";

@Component({
  selector: 'quwen-items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListComponent {

  constructor(private openPageService: OpenPageService) {}

  @Input() itemsList: ItemsList;

  onOpen(url: string) : void {
    this.openPageService.open(url);
  }
}
