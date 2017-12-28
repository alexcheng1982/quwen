import { async, ComponentFixture } from "@angular/core/testing";
import { TestUtils } from "../../test-utils";
import { HomePage } from "./home";
import { ItemsListComponent } from "../../components/items-list/items-list";
import { ItemComponent } from "../../components/item/item";
import { ItemsListServiceMock } from "../../testing/ItemsListServiceMock";
import { ItemsListService } from "../../services/ItemsListService";
import { By } from "@angular/platform-browser";

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;

  beforeEach(async(() => TestUtils.beforeEachCompiler(
    [HomePage, ItemsListComponent, ItemComponent],
    [{provide: ItemsListService, useClass: ItemsListServiceMock}]).then((result) => {
    fixture = result.fixture;
    component = result.component;
  })));

  it('should display items', async(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      let items = fixture.debugElement.queryAll(By.css('quwen-item'));
      expect(items.length).toEqual(10);
    });
  }));
});
