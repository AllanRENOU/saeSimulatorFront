import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoppointComponent } from './list-stoppoint.component';

describe('ListStoppointComponent', () => {
  let component: ListStoppointComponent;
  let fixture: ComponentFixture<ListStoppointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListStoppointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStoppointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
