import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtagsComponent } from './showtags.component';

describe('ShowtagsComponent', () => {
  let component: ShowtagsComponent;
  let fixture: ComponentFixture<ShowtagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowtagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
