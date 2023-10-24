import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from "./dashboard.component";
import { SidenavModule } from "../side-nav/sidenav.module";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { DashboardRoutingModule } from "./dashboard.routing.module";

@NgModule({
    imports: [CommonModule, FormsModule, SidenavModule, DashboardRoutingModule],
    declarations: [DashboardComponent],
    exports: [DashboardComponent]
})
export class DashboardModule { }