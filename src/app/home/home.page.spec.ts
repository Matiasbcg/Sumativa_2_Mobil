import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { DBTaskService } from '../services/dbtask.service';

describe('HomePage', () => {
  let component: HomePage;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [HomePage],
      providers: [DBTaskService]
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

