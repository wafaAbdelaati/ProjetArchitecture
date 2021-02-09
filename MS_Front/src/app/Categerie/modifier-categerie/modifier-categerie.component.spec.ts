import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCategerieComponent } from './modifier-categerie.component';

describe('ModifierCategerieComponent', () => {
  let component: ModifierCategerieComponent;
  let fixture: ComponentFixture<ModifierCategerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierCategerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCategerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
