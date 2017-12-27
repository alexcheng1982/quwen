export interface Item {
  id: string;
  title: string;
  date: string;
  author: string;
  url: string;
}

export interface ItemsList {
  items: Item[];
}
