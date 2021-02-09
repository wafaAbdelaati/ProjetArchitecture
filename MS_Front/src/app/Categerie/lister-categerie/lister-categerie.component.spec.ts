import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerCategerieComponent } from './lister-categerie.component';

describe('ListerCategerieComponent', () => {
  let component: ListerCategerieComponent;
  let fixture: ComponentFixture<ListerCategerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerCategerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerCategerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
