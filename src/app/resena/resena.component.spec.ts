import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ResenaComponent } from './resena.component';
import { CapacitorSQLiteSimulator } from './capacitorsqlite.mock'; 

describe('ResenaComponent', () => {
  let component: ResenaComponent;
  let fixture: ComponentFixture<ResenaComponent>;
  let capacitorSQLite: CapacitorSQLiteSimulator;

  beforeEach(waitForAsync(() => {
    capacitorSQLite = new CapacitorSQLiteSimulator(); 

    TestBed.configureTestingModule({
      declarations: [ResenaComponent],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
      ],
      providers: [
        { provide: 'CapacitorSQLite', useValue: capacitorSQLite },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ResenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });  
});











