import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSidebarComponent } from './content-sidebar.component';

describe('ContentSidebarComponent', () => {
  let component: ContentSidebarComponent;
  let fixture: ComponentFixture<ContentSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
