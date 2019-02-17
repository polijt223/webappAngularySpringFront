import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcordeonBotoneraComponent } from './acordeon-botonera.component';

describe('AcordeonBotoneraComponent', () => {
  let component: AcordeonBotoneraComponent;
  let fixture: ComponentFixture<AcordeonBotoneraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcordeonBotoneraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcordeonBotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
