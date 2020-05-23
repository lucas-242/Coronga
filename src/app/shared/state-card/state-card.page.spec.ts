import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StateCardPage } from './state-card.page';

describe('StateCardPage', () => {
  let component: StateCardPage;
  let fixture: ComponentFixture<StateCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StateCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
