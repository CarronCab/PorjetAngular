import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingFilmsComponent } from './upcoming-films.component';

describe('UpcomingFilmsComponent', () => {
  let component: UpcomingFilmsComponent;
  let fixture: ComponentFixture<UpcomingFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
