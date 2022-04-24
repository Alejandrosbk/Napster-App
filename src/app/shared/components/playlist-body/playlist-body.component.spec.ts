import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistBodyComponent } from './playlist-body.component';

describe('PlaylistBodyComponent', () => {
  let component: PlaylistBodyComponent;
  let fixture: ComponentFixture<PlaylistBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
