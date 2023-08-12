import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DowloadComponent } from './downloands.component';

describe('AboutComponent', () => {
  let component: DowloadComponent;
  let fixture: ComponentFixture<DowloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DowloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
