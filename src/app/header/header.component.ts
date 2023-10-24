import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() showSideBar : boolean = false;
  @Output() showSideBarEvent = new EventEmitter<boolean>();
  isNavbarCollapsed = true;
  
  onOpenSideBar (){
    this.showSideBar = !this.showSideBar;
    this.showSideBarEvent.emit(this.showSideBar);
  }
}
