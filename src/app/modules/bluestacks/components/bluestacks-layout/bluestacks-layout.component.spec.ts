import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluestacksLayoutComponent } from './bluestacks-layout.component';

describe('BluestacksLayoutComponent', () => {
  let component: BluestacksLayoutComponent;
  let fixture: ComponentFixture<BluestacksLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluestacksLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluestacksLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
