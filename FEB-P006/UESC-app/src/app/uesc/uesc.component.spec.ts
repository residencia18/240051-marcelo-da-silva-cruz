import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UescComponent } from './uesc.component';

describe('UescComponent', () => {
  let component: UescComponent;
  let fixture: ComponentFixture<UescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
     
      declarations: [UescComponent],
    }).compileComponents();
    
    const fixture = TestBed.createComponent(UescComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
 
});
