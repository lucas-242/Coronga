import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CountryCardPage } from './country-card.page';

describe('CountryCardPage', () => {
  let component: CountryCardPage;
  let fixture: ComponentFixture<CountryCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CountryCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
