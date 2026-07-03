import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioAdminActionsComponent } from './portfolio-admin-actions.component';

describe('PortfolioAdminActionsComponent', () => {
  let component: PortfolioAdminActionsComponent;
  let fixture: ComponentFixture<PortfolioAdminActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioAdminActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioAdminActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
