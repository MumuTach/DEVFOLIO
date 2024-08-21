import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetsComponent } from './projets.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ProjetsComponent', () => {
  let component: ProjetsComponent;
  let fixture: ComponentFixture<ProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render project rows', () => {
    const projectRows: DebugElement[] = fixture.debugElement.queryAll(By.css('.projects__row'));
    expect(projectRows.length).toBeGreaterThan(0);
  });

  it('should render the project title "DevFolio"', () => {
    const devFolioTitle: HTMLElement = fixture.debugElement.query(By.css('.projects__row-content-title')).nativeElement;
    expect(devFolioTitle.textContent).toContain('DevFolio');
  });

  it('should render two buttons for "DevFolio"', () => {
    const buttonRow: DebugElement = fixture.debugElement.query(By.css('.button-row'));
    const buttons: DebugElement[] = buttonRow.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
  });

  it('should have a "Code" button linking to the correct GitHub repository', () => {
    const codeButton: HTMLElement = fixture.debugElement.query(By.css('.button-row a')).nativeElement;
    expect(codeButton.getAttribute('href')).toBe('https://github.com/MumuTach/DEVFOLIO.git');
    expect(codeButton.textContent).toContain('Code');
  });
});
