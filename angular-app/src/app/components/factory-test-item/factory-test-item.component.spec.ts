import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryTestItemComponent } from './factory-test-item.component';

describe('FactoryTestItemComponent', () => {
  let component: FactoryTestItemComponent;
  let fixture: ComponentFixture<FactoryTestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoryTestItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoryTestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
