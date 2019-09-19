import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutodropdownLibComponent } from './autodropdown-lib.component';

describe('AutodropdownLibComponent', () => {
  let component: AutodropdownLibComponent;
  let fixture: ComponentFixture<AutodropdownLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutodropdownLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutodropdownLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
