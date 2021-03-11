import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaItemComponent } from './tabela-item.component';

describe('TabelaItemComponent', () => {
  let component: TabelaItemComponent;
  let fixture: ComponentFixture<TabelaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
