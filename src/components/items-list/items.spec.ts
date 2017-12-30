import { async, ComponentFixture } from "@angular/core/testing";
import { By } from '@angular/platform-browser';
import { ItemsListComponent } from './items-list';
import { ItemComponent } from "../item/item";
import { TestUtils } from "../../test-utils";
import { ItemsListServiceMock } from "../../testing/ItemsListServiceMock";
import { OpenPageService } from "../../services/OpenPageService";
import { SharingService } from "../../services/SharingService";

describe('ItemsListComponent', () => {
  let fixture: ComponentFixture<ItemsListComponent>;
  let component: ItemsListComponent;
  let itemsListService = new ItemsListServiceMock();

  beforeEach(async(() => {
    let openPageServiceStub = jasmine.createSpyObj('openPage', ['open']);
    let sharingServiceStub = jasmine.createSpyObj('sharing', ['share']);
    TestUtils.beforeEachCompiler([ItemsListComponent, ItemComponent],
      [{provide: OpenPageService, useValue: openPageServiceStub},
        {provide: SharingService, useValue: sharingServiceStub}]).then((result => {
      fixture = result.fixture;
      component = result.component;
    }))
  }));

  it('should display items', async(() => {
    component.itemsList = itemsListService.loadSync();
    fixture.detectChanges();
    let items = fixture.debugElement.queryAll(By.css('h2'));
    expect(items.length).toEqual(10);
    let title = items[0].nativeElement.textContent;
    expect(title).toEqual('Item 0');
  }));

  it('should open items', async(() => {
    component.itemsList = itemsListService.loadSync();
    fixture.detectChanges();
    let elem = fixture.debugElement.queryAll(By.css('h2'))[0];
    elem.triggerEventHandler('click', null);
    let openPageService = fixture.debugElement.injector.get(OpenPageService);
    expect(openPageService.open).toHaveBeenCalledTimes(1);
    expect(openPageService.open).toHaveBeenCalledWith('http://example.com/0');
  }));

  it('should share items', async(() => {
    component.itemsList = itemsListService.loadSync();
    fixture.detectChanges();
    let elem = fixture.debugElement.queryAll(By.css('button'))[0];
    elem.triggerEventHandler('click', null);
    let sharingService = fixture.debugElement.injector.get(SharingService);
    expect(sharingService.share).toHaveBeenCalledTimes(1);
    expect(sharingService.share).toHaveBeenCalledWith('http://example.com/0', 'Item 0');
  }));
});
