import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigItemComponent } from './big-item.component';

describe('BigItemComponent', () => {
  let component: BigItemComponent;
  let fixture: ComponentFixture<BigItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
