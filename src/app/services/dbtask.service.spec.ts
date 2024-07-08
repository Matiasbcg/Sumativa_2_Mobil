import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DBTaskService } from '../services/dbtask.service';

describe('DBTaskService', () => {
  let service: DBTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [DBTaskService]
    });
    service = TestBed.inject(DBTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});

