import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocinfoPage } from './docinfo.page';

describe('DocinfoPage', () => {
  let component: DocinfoPage;
  let fixture: ComponentFixture<DocinfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DocinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
