import { TestBed } from '@angular/core/testing';

import { LineDrawingService } from './line-drawing.service';

describe('LineDrawingService', () => {
  let service: LineDrawingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LineDrawingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
