import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetalleHijoPage } from './detalle-hijo.page';
import { DBTaskService } from '../../services/dbtask.service';

describe('DetalleHijoPage', () => {
  let component: DetalleHijoPage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [DetalleHijoPage],
      providers: [DBTaskService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(DetalleHijoPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});

