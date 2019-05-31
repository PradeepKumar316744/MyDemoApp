import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsColorCodeComponent } from './bags-color-code.component';

describe('BagsColorCodeComponent', () => {
  let component: BagsColorCodeComponent;
  let fixture: ComponentFixture<BagsColorCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsColorCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsColorCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
