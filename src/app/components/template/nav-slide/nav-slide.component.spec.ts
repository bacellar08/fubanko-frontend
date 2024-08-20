import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSlideComponent } from './nav-slide.component';

describe('NavSlideComponent', () => {
  let component: NavSlideComponent;
  let fixture: ComponentFixture<NavSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
