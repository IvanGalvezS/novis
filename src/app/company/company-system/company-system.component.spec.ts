import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySystemComponent } from './company-system.component';

describe('CompanySystemComponent', () => {
  let component: CompanySystemComponent;
  let fixture: ComponentFixture<CompanySystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
