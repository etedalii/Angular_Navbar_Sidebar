import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SideNavComponent } from "./side-nav.component";
import { HeaderModule } from "../header/header.module";
import { SidenavRoutingModule } from "./side-nav.routing.module";

@NgModule({
    imports: [CommonModule, FormsModule, HeaderModule, SidenavRoutingModule],
    declarations:[SideNavComponent],
    exports: [SideNavComponent]
})
export class SidenavModule{}