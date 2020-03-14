import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUsersTableComponent } from './container-users-table.component';

describe('ContainerUsersTableComponent', () => {
  let component: ContainerUsersTableComponent;
  let fixture: ComponentFixture<ContainerUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
