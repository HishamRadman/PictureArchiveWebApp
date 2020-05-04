import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureFrameComponent } from './picture-frame.component';

describe('PictureFrameComponent', () => {
  let component: PictureFrameComponent;
  let fixture: ComponentFixture<PictureFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PictureFrameComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
