import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ProgramDetailComponent } from './program-detail.component';
import { ProgramsService } from '../services/programs.service';

describe('ProgramDetailComponent', () => {
  let component: ProgramDetailComponent;
  let fixture: ComponentFixture<ProgramDetailComponent>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: any;
  let mockProgramsService: jasmine.SpyObj<ProgramsService>;
  let mockDomSanitizer: jasmine.SpyObj<DomSanitizer>;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockProgramsService = jasmine.createSpyObj('ProgramsService', ['getProgramById']);
    mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['sanitize', 'bypassSecurityTrustStyle']);
    mockActivatedRoute = {
      paramMap: jasmine.createSpyObj('paramMap', ['get'])
    };

    await TestBed.configureTestingModule({
      imports: [ProgramDetailComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ProgramsService, useValue: mockProgramsService },
        { provide: DomSanitizer, useValue: mockDomSanitizer }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
