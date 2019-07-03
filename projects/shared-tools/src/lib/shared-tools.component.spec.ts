import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedToolsComponent } from './shared-tools.component';

describe('SharedToolsComponent', () => {
  let component: SharedToolsComponent;
  let fixture: ComponentFixture<SharedToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
