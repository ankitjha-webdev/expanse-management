import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExpanceComponent } from './update-expance.component';

describe('UpdateExpanceComponent', () => {
  let component: UpdateExpanceComponent;
  let fixture: ComponentFixture<UpdateExpanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateExpanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateExpanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
