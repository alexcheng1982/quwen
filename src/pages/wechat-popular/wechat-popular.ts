import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsList } from "../../models/item";
import { ItemsListService } from "../../services/ItemsListService";

@Component({
  selector: 'page-wechat-popular',
  templateUrl: 'wechat-popular.html',
})
export class WechatPopularPage implements OnInit {
  itemsList: Promise<ItemsList>;

  constructor(public navCtrl: NavController, private itemsListService: ItemsListService) {
  }

  ngOnInit(): void {
    this.itemsList = this.itemsListService.load('https://vividcode.io/quwen/wechat.json', data => {
      return data.showapi_res_body.newslist.map(item => ({
        id: `${new Date().getTime()}`,
        title: item.title,
        author: item.description,
        date: item.ctime,
        url: item.url,
      }));
    });
  }

}
