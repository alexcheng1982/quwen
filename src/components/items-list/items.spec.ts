import { async, ComponentFixture } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { ItemsListComponent } from './items-list';
import { ItemComponent } from "../item/item";
import { TestUtils } from "../../test-utils";
import { ItemsListServiceMock } from "../../testing/ItemsListServiceMock";

describe('ItemsListComponent', () => {
  let fixture: ComponentFixture<ItemsListComponent>;
  let component: ItemsListComponent;
  let itemsListService = new ItemsListServiceMock();

  beforeEach(async(() => TestUtils.beforeEachCompiler([ItemsListComponent, ItemComponent]).then((result => {
    fixture = result.fixture;
    component = result.component;
  }))));

  it('should display items', async(() => {
    component.itemsList = itemsListService.loadSync();
    fixture.detectChanges();
    let items = fixture.debugElement.queryAll(By.css('h2'));
    expect(items.length).toEqual(10);
    let title = items[0].nativeElement.textContent;
    expect(title).toEqual('Item 0');
  }));
});
