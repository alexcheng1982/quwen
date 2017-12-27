import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ItemComponent } from './item';

describe('ItemComponent', () => {
  let fixture: ComponentFixture<ItemComponent>;
  let component: ItemComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemComponent ],
    }).compileComponents();
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
  }));

  it('should display item info', async(() => {
    component.item = {
      id: '001',
      title: 'Test title',
      author: 'Test author',
      url: 'http://example.com/001',
      date: '2017-12-27',
    };
    fixture.detectChanges();
    let title = fixture.debugElement.query(By.css('h2')).nativeElement.textContent;
    expect(title).toEqual('Test title');
    let author = fixture.debugElement.query(By.css('span.author')).nativeElement.textContent;
    expect(author).toEqual('Test author');
    let date = fixture.debugElement.query(By.css('span.date')).nativeElement.textContent;
    expect(date).toEqual('2017-12-27');
  }));
});
