import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InformacionComponent } from './informacion.component';
import { DoctorService } from '../services/doctor.service';

describe('InformacionComponent', () => {
  let component: InformacionComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [InformacionComponent],
      providers: [DoctorService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(InformacionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

