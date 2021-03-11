import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsCadastroComponent } from './buttons-cadastro.component';

describe('ButtonsCadastroComponent', () => {
  let component: ButtonsCadastroComponent;
  let fixture: ComponentFixture<ButtonsCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
