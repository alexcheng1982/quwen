import { Item, ItemsList } from "../models/item";
import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http';
import { Platform } from "ionic-angular";

@Injectable()
export class ItemsListService {

  constructor(private platform: Platform, private http: HTTP) {}

  load(url: string, converter: (data: any) => Item[]): Promise<ItemsList> {
    return this.platform.ready().then(() => {
      return this.http.get(url, {}, {}).then(res => {
        let data = JSON.parse(res.data);
        return {
          items: converter(data),
        };
      });
    });
  }
}
