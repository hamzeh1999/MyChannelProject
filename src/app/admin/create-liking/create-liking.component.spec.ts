import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLikingComponent } from './create-liking.component';

describe('CreateLikingComponent', () => {
  let component: CreateLikingComponent;
  let fixture: ComponentFixture<CreateLikingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLikingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
