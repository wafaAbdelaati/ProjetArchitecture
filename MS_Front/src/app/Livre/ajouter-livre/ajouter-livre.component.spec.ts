import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLivreComponent } from './ajouter-livre.component';

describe('AjouterLivreComponent', () => {
  let component: AjouterLivreComponent;
  let fixture: ComponentFixture<AjouterLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
