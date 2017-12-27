import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestBed} from '@angular/core/testing';
import {
  App, Config, DomController, Form, GestureController, IonicModule, Keyboard, MenuController, NavController,
  Platform
} from 'ionic-angular';

export class TestUtils {

  public static beforeEachCompiler(components: Array<any>, providers: Array<any> = []): Promise<{fixture: any, component: any}> {
    return TestUtils.configureIonicTestingModule(components, providers)
      .compileComponents().then(() => {
        let fixture: any = TestBed.createComponent(components[0]);
        return {
          fixture,
          component: fixture.componentInstance,
        };
      });
  }

  public static configureIonicTestingModule(components: Array<any>, providers: Array<any> = []): typeof TestBed {
    return TestBed.configureTestingModule({
      declarations: [
        ...components,
      ],
      providers: [
        App,
        Config,
        DomController,
        Form,
        Keyboard,
        MenuController,
        NavController,
        GestureController,
        Platform,
        ...providers,
      ],
      imports: [
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
      ],
    });
  }
}
