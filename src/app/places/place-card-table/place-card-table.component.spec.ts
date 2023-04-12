import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCardTableComponent } from './place-card-table.component';

describe('PlaceCardTableComponent', () => {
  let component: PlaceCardTableComponent;
  let fixture: ComponentFixture<PlaceCardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCardTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
