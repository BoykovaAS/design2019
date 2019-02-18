import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferatComponent } from './referat.component';

describe('ReferatComponent', () => {
  let component: ReferatComponent;
  let fixture: ComponentFixture<ReferatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
