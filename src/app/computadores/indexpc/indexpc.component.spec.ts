import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexpcComponent } from './indexpc.component';

describe('IndexpcComponent', () => {
  let component: IndexpcComponent;
  let fixture: ComponentFixture<IndexpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
