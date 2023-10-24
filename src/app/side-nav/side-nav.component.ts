import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  activeMenu: string = '';
  isSidebarActive: boolean = false;
  @Output() changeSidebar = new EventEmitter<boolean>();

  constructor(){}

  ngOnInit(): void {
    this.activeMenu = 'dashboard'
  }

  onMenuClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    let menuName = clickedElement.parentElement?.getAttribute('data-menu');
    if (menuName === null || menuName === undefined) {
      const textContent = clickedElement.parentElement?.firstChild?.textContent;
      if (textContent) {
        menuName = textContent.trim();
      } else {
        menuName = '';
      }
    }
    this.activeMenu = menuName.toLocaleLowerCase();
  }

  // Function to toggle the sidebar
  evSidebarToggled(isActive: boolean) {
    this.isSidebarActive = isActive;
  }

  onCloseSidebar() {
    this.isSidebarActive = false;
    this.changeSidebar.emit(this.isSidebarActive);
  }
}

