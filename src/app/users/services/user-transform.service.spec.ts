import { TestBed } from '@angular/core/testing';

import { UserTransformService } from './user-transform.service';

describe('UserTransformService', () => {
  let service: UserTransformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
