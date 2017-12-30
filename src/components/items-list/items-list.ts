import { Component, Input } from '@angular/core';
import { ItemsList } from '../../models/item';
import { OpenPageService } from "../../services/OpenPageService";
import { SharingService } from "../../services/SharingService";

@Component({
  selector: 'quwen-items-list',
  templateUrl: 'items-list.html'
})
export class ItemsListComponent {

  constructor(private openPageService: OpenPageService,
              private sharingService: SharingService) {}

  @Input() itemsList: ItemsList;

  onOpen(url: string): void {
    this.openPageService.open(url);
  }

  onShare(url: string, message: string): void {
    this.sharingService.share(url, message);
  }
}
