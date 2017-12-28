import { ItemsList } from "../models/item";

export class ItemsListService {
  load(): Promise<ItemsList> {
    return Promise.resolve({
      items: [
        {
          title: '测试标题',
          author: '作者',
          date: '2017-12-27',
          id: '1',
          url: 'http://example.com/1',
        }
      ]
    });
  }
}
