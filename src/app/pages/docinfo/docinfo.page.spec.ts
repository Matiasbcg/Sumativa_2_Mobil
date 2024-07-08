import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DocinfoPage } from './docinfo.page';
import { DBTaskService } from '../../services/dbtask.service';

describe('DoctorinfoPage', () => {
  let component: DocinfoPage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [DocinfoPage],
      providers: [
        DBTaskService,
        { provide: ActivatedRoute, useValue: { paramMap: of({ get: () => 'test-id' }) } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(DocinfoPage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

