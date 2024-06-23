import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAdditionsComponent } from './latest-additions.component';

describe('LatestAdditionsComponent', () => {
  let component: LatestAdditionsComponent;
  let fixture: ComponentFixture<LatestAdditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestAdditionsComponent]
    });
    fixture = TestBed.createComponent(LatestAdditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
