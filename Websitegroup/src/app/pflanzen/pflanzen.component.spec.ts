import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PflanzenComponent } from './pflanzen.component';

describe('PflanzenComponent', () => {
  let component: PflanzenComponent;
  let fixture: ComponentFixture<PflanzenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PflanzenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PflanzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
