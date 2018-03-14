import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolTipDemoComponent } from './tool-tip-demo.component';

describe('ToolTipDemoComponent', () => {
  let component: ToolTipDemoComponent;
  let fixture: ComponentFixture<ToolTipDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolTipDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
