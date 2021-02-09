import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerClientComponent } from './lister-client.component';

describe('ListerClientComponent', () => {
  let component: ListerClientComponent;
  let fixture: ComponentFixture<ListerClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
