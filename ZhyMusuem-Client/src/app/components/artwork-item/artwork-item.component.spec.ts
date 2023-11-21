import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkItemComponent } from './artwork-item.component';

describe('ArtworkItemComponent', () => {
  let component: ArtworkItemComponent;
  let fixture: ComponentFixture<ArtworkItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtworkItemComponent]
    });
    fixture = TestBed.createComponent(ArtworkItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
