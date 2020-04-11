import { TestBed } from '@angular/core/testing';

import { StudentauthService } from './studentauth.service';

describe('StudentauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentauthService = TestBed.get(StudentauthService);
    expect(service).toBeTruthy();
  });
});
