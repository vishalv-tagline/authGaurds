import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPurchaseComponent } from './help-purchase.component';

describe('HelpPurchaseComponent', () => {
  let component: HelpPurchaseComponent;
  let fixture: ComponentFixture<HelpPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
