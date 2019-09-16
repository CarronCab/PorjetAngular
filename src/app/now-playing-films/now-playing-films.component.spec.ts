import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingFilmsComponent } from './now-playing-films.component';

describe('NowPlayingFilmsComponent', () => {
  let component: NowPlayingFilmsComponent;
  let fixture: ComponentFixture<NowPlayingFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlayingFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlayingFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
