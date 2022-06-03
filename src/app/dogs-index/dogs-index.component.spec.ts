import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsIndexComponent } from './dogs-index.component';

describe('DogsIndexComponent', () => {
  let component: DogsIndexComponent;
  let fixture: ComponentFixture<DogsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
