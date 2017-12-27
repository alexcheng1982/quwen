import {async, ComponentFixture} from "@angular/core/testing";
import {By} from '@angular/platform-browser';
import {ItemsListComponent} from './items-list';
import {Item} from "../../models/item";
import {ItemComponent} from "../item/item";
import {TestUtils} from "../../test-utils";

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

describe('ItemsListComponent', () => {
  let fixture: ComponentFixture<ItemsListComponent>;
  let component: ItemsListComponent;

  beforeEach(async(() => TestUtils.beforeEachCompiler([ItemsListComponent, ItemComponent]).then((result => {
    fixture = result.fixture;
    component = result.component;
  }))));

  it('should display items', async(() => {
    component.itemsList = {
      items: createItems(10),
    };
    fixture.detectChanges();
    let items = fixture.debugElement.queryAll(By.css('h2'));
    expect(items.length).toEqual(10);
    let title = items[0].nativeElement.textContent;
    expect(title).toEqual('Item 0');
  }));
});
