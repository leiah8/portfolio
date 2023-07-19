import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinecartComponent } from './minecart.component';

describe('MinecartComponent', () => {
  let component: MinecartComponent;
  let fixture: ComponentFixture<MinecartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinecartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinecartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
