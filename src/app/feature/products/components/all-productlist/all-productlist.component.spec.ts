import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductlistComponent } from './all-productlist.component';

describe('AllProductlistComponent', () => {
  let component: AllProductlistComponent;
  let fixture: ComponentFixture<AllProductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
