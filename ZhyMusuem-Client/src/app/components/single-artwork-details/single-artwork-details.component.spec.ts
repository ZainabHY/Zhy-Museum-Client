import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleArtworkDetailsComponent } from './single-artwork-details.component';

describe('SingleArtworkDetailsComponent', () => {
  let component: SingleArtworkDetailsComponent;
  let fixture: ComponentFixture<SingleArtworkDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleArtworkDetailsComponent]
    });
    fixture = TestBed.createComponent(SingleArtworkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
