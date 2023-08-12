import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetFactoryComponent } from './planet-factory.component';

describe('PlanetFactoryComponent', () => {
  let component: PlanetFactoryComponent;
  let fixture: ComponentFixture<PlanetFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
