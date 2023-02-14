import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpanceComponent } from './list-expance.component';

describe('ListExpanceComponent', () => {
  let component: ListExpanceComponent;
  let fixture: ComponentFixture<ListExpanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
