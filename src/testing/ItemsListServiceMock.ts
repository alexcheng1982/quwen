import { Item, ItemsList } from "../models/item";

function createItems(n: number): Item[] {
  const items = [];
  for (let i = 0; i < n; i++) {
    items.push({
      id : `item-${i}`,
      title: `Item ${i}`,
      author: `Author ${i}`,
      url: `http://example.com/${i}`,
      date: '2017-12-27',
    });
  }
  return items;
}

export class ItemsListServiceMock {
  loadSync(): ItemsList {
    return {
      items: createItems(10),
    };
  }
  load(): Promise<ItemsList> {
    return Promise.resolve({
      items: createItems(10),
    });
  }
}
