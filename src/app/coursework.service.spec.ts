import { TestBed, inject } from '@angular/core/testing';

import { CourseworkService } from './coursework.service';

describe('CourseworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseworkService]
    });
  });

  it('should be created', inject([CourseworkService], (service: CourseworkService) => {
    expect(service).toBeTruthy();
  }));
});
