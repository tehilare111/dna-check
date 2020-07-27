import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';

describe('RestApiService', () => {
<<<<<<< HEAD
  let service: RestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiService);
  });

  it('should be created', () => {
=======
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestApiService = TestBed.get(RestApiService);
>>>>>>> 067c169... new lost form page
    expect(service).toBeTruthy();
  });
});
