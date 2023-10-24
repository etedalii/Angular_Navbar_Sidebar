import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header.component";
import { DashboardModule } from "../dashboard/dashboard.module";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
    imports: [AppRoutingModule, CommonModule, FormsModule],
    declarations:[HeaderComponent],
    exports: [HeaderComponent]
})
export class HeaderModule{}