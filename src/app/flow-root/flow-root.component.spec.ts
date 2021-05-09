import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowRootComponent } from './flow-root.component';

describe('FlowRootComponent', () => {
  let component: FlowRootComponent;
  let fixture: ComponentFixture<FlowRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
