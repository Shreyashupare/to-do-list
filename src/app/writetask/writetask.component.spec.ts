import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritetaskComponent } from './writetask.component';

describe('WritetaskComponent', () => {
  let component: WritetaskComponent;
  let fixture: ComponentFixture<WritetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
