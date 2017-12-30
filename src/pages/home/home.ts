import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';
import { ItemsList } from '../../models/item';
import { ItemsListService } from "../../services/ItemsListService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  itemsList: Promise<ItemsList>;

  constructor(private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private itemsListService: ItemsListService) {
  }

  ngOnInit(): void {
    const loader = this.loadingCtrl.create({
      content: '加载中...',
    });
    loader.present();
    this.itemsList = this.itemsListService.load('https://vividcode.io/quwen/news.json', data => {
      return data.showapi_res_body.pagebean.contentlist.map(item => ({
        id: item.id,
        title: item.title,
        author: item.source,
        date: item.pubDate,
        url: item.link,
      }));
    }).then(result => {
      loader.dismiss();
      return result;
    }).catch(error => {
      loader.dismiss();
      this.toastCtrl.create({
        message: '加载数据失败',
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: '关闭',
      }).present();
      return {
        items: [],
      };
    });
  }
}
