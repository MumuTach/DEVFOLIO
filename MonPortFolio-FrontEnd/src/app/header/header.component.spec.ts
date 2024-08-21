import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatIconModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a menu icon', () => {
    const menuIcon: DebugElement = fixture.debugElement.query(By.css('.menu-icon mat-icon'));
    expect(menuIcon.nativeElement.textContent).toBe('menu');
  });

  it('should toggle the menu when the menu icon is clicked', () => {
    const menuIcon = fixture.debugElement.query(By.css('.menu-icon'));
    menuIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeTrue();

    menuIcon.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeFalse();
  });

  it('should have a navigation menu with 5 items', () => {
    const navItems: DebugElement[] = fixture.debugElement.queryAll(By.css('nav ul li'));
    expect(navItems.length).toBe(5);
  });

  it('should contain the correct icons and labels for each menu item', () => {
    const homeItem: HTMLElement = fixture.debugElement.query(By.css('nav ul li:nth-child(1) mat-icon')).nativeElement;
    const aboutItem: HTMLElement = fixture.debugElement.query(By.css('nav ul li:nth-child(2) mat-icon')).nativeElement;
    const projectsItem: HTMLElement = fixture.debugElement.query(By.css('nav ul li:nth-child(3) mat-icon')).nativeElement;
    const contactsItem: HTMLElement = fixture.debugElement.query(By.css('nav ul li:nth-child(4) mat-icon')).nativeElement;
    const resumeItem: HTMLElement = fixture.debugElement.query(By.css('nav ul li:nth-child(5) mat-icon')).nativeElement;

    expect(homeItem.textContent).toBe('home');
    expect(aboutItem.textContent).toBe('info');
    expect(projectsItem.textContent).toBe('work');
    expect(contactsItem.textContent).toBe('contact_mail');
    expect(resumeItem.textContent).toBe('play_for_work');
  });

  it('should highlight the "HOME" menu item as active', () => {
    const activeItem: HTMLElement = fixture.debugElement.query(By.css('nav ul li a.active')).nativeElement;
    expect(activeItem.textContent?.trim()).toContain('HOME');
  });
});
