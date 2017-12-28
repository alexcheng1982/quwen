import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsList } from '../../models/item';
import { ItemsListService } from "../../services/ItemsListService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  itemsList: Promise<ItemsList>;

  constructor(public navCtrl: NavController, private itemsListService: ItemsListService) {

  }

  ngOnInit(): void {
    this.itemsList = this.itemsListService.load('https://vividcode.io/quwen/news.json', data => {
      return data.showapi_res_body.pagebean.contentlist.map(item => ({
        id: item.id,
        title: item.title,
        author: item.source,
        date: item.pubDate,
        url: item.link,
      }));
    });
  }
}
