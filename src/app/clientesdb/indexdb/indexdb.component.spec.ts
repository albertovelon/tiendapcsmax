import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexdbComponent } from './indexdb.component';

describe('IndexdbComponent', () => {
  let component: IndexdbComponent;
  let fixture: ComponentFixture<IndexdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
