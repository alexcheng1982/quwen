import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TestBed} from '@angular/core/testing';
import {
  App, Config, DomController, Form, GestureController, IonicModule, Keyboard, MenuController, NavController,
  Platform
} from 'ionic-angular';

class DomControllerMock extends DomController {
  public read(): any {}
  public write(): any {}
}

class PlatformMock extends Platform {
  public registerListener(): any {}

  win(): Window {
    return window;
  }
}

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
        { provide: DomController, useClass: DomControllerMock },
        Form,
        Keyboard,
        MenuController,
        NavController,
        GestureController,
        { provide: Platform, useClass: PlatformMock },
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
