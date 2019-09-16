import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRatedFilmsComponent } from './best-rated-films.component';

describe('BestRatedFilmsComponent', () => {
  let component: BestRatedFilmsComponent;
  let fixture: ComponentFixture<BestRatedFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestRatedFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRatedFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
