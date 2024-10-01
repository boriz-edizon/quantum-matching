import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePreviewComponent } from './save-preview.component';

describe('SavePreviewComponent', () => {
  let component: SavePreviewComponent;
  let fixture: ComponentFixture<SavePreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavePreviewComponent]
    });
    fixture = TestBed.createComponent(SavePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
