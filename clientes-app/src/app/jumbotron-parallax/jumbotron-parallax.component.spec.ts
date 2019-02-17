import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbotronParallaxComponent } from './jumbotron-parallax.component';

describe('JumbotronParallaxComponent', () => {
  let component: JumbotronParallaxComponent;
  let fixture: ComponentFixture<JumbotronParallaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumbotronParallaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbotronParallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
