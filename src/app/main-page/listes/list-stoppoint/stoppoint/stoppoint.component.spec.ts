import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppointComponent } from './stoppoint.component';

describe('StoppointComponent', () => {
  let component: StoppointComponent;
  let fixture: ComponentFixture<StoppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoppointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
