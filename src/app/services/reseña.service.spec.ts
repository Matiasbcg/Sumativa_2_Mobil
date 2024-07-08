import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResenaService } from './reseña.service';

describe('ResenaService', () => {
  let service: ResenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ResenaService]
    });
    service = TestBed.inject(ResenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 
});

