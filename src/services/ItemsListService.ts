import { Item, ItemsList } from "../models/item";
import { Injectable } from "@angular/core";
import { HTTP } from '@ionic-native/http';
import { Platform } from "ionic-angular";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ItemsListService {

  constructor(private platform: Platform, private http: HTTP, private httpClient: HttpClient) {}

  load(url: string, converter: (data: any) => Item[]): Promise<ItemsList> {
    return this.platform.ready().then((readySource) => {
      if (readySource == 'cordova') {
        return this.http.get(url, {}, {}).then(res => {
          let data = JSON.parse(res.data);
          return {
            items: converter(data),
          };
        });
      } else {
        return this.httpClient.get(url.replace('https://vividcode.io/quwen', '/api')).toPromise().then(data => {
          return {
            items: converter(data),
          };
        });
      }
    });
  }
}
