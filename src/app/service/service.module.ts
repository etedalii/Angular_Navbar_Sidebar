import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { ServiceComponent } from "./service.component";
import { ServiceRoutingModule } from "./service.routing.module";

@NgModule({
    imports: [CommonModule, FormsModule, ServiceRoutingModule],
    declarations: [ServiceComponent],
    exports: [ServiceComponent]
})
export class ServiceModule { }