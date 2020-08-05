import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertButtonComponent ]
    })
    .compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have a serverity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  it('should have an H1 tag of `Alert Button`', () => { // testing markup
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  });

  it('should toggle the message boolean', () => { // testing function
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean asynchronosly', fakeAsync(() => { // testing async function
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    // tick(499);
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  it('should have message content defined from an observable', () => { // testing observable
    component.content$.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe('you have been warned');
    });
  });
});
