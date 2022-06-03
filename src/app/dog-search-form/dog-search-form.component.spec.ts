import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogSearchFormComponent } from './dog-search-form.component';

describe('DogSearchFormComponent', () => {
  let component: DogSearchFormComponent;
  let fixture: ComponentFixture<DogSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogSearchFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
