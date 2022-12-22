import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBidComponent } from './view-bid.component';

describe('ViewBidComponent', () => {
  let component: ViewBidComponent;
  let fixture: ComponentFixture<ViewBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
