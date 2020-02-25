import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionAgentsComponent } from './extension-agents.component';

describe('ExtensionAgentsComponent', () => {
  let component: ExtensionAgentsComponent;
  let fixture: ComponentFixture<ExtensionAgentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionAgentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
