import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultScreen } from './result-screen';

describe('ResultScreen', () => {
  let component: ResultScreen;
  let fixture: ComponentFixture<ResultScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
