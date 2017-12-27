import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemsList } from '../../models/item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  itemsList: ItemsList;

  constructor(public navCtrl: NavController) {
    this.itemsList = {
      items: [
        {
          title: 'Test',
          author: 'Author1',
          date: 'Test',
          id: '1',
          url: '',
        }
      ]
    };
  }

}
