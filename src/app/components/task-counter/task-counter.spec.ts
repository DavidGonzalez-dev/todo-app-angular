import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCounter } from './task-counter';

describe('TaskCounter', () => {
  let component: TaskCounter;
  let fixture: ComponentFixture<TaskCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
