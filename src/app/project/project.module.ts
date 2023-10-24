import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProjectComponent } from "./project.component";
import { ProjectRoutingModule } from "./project.routing.module";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [CommonModule, FormsModule, ProjectRoutingModule],
    declarations: [ProjectComponent],
    exports: [ProjectComponent]
})
export class ProjectModule { }