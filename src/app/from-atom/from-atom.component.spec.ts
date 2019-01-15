import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromAtomComponent } from './from-atom.component';

describe('FromAtomComponent', () => {
  let component: FromAtomComponent;
  let fixture: ComponentFixture<FromAtomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromAtomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromAtomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
