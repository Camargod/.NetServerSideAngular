/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RatingTabComponent } from './rating-tab.component';

describe('RatingTabComponent', () => {
  let component: RatingTabComponent;
  let fixture: ComponentFixture<RatingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
