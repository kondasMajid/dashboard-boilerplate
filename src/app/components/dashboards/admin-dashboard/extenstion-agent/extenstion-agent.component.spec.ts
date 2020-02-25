import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtenstionAgentComponent } from './extenstion-agent.component';

describe('ExtenstionAgentComponent', () => {
  let component: ExtenstionAgentComponent;
  let fixture: ComponentFixture<ExtenstionAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtenstionAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtenstionAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
