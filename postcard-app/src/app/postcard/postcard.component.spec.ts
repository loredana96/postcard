import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcardComponent } from './postcard.component';

describe('PostcardComponent', () => {
  let component: PostcardComponent;
  let fixture: ComponentFixture<PostcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
