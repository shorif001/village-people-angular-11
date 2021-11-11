import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserinfoComponent } from './single-userinfo.component';

describe('SingleUserinfoComponent', () => {
  let component: SingleUserinfoComponent;
  let fixture: ComponentFixture<SingleUserinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUserinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
