import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerLivreComponent } from './lister-livre.component';

describe('ListerLivreComponent', () => {
  let component: ListerLivreComponent;
  let fixture: ComponentFixture<ListerLivreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerLivreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
