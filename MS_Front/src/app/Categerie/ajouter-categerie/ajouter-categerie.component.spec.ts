import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCategerieComponent } from './ajouter-categerie.component';

describe('AjouterCategerieComponent', () => {
  let component: AjouterCategerieComponent;
  let fixture: ComponentFixture<AjouterCategerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCategerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCategerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
