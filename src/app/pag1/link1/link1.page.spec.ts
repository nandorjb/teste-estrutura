import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Link1Page } from './link1.page';

describe('Link1Page', () => {
  let component: Link1Page;
  let fixture: ComponentFixture<Link1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Link1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Link1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
