import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentprov } from './index.componentprov';

describe('IndexComponent', () => {
  let component: IndexComponentprov;
  let fixture: ComponentFixture<IndexComponentprov>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexComponentprov ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentprov);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
