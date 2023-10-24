import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { UsersRoutingModule } from "./users.routing.module";
import { UsersComponent } from "./users.component";

@NgModule({
    imports: [CommonModule, FormsModule, UsersRoutingModule],
    declarations: [UsersComponent],
    exports: [UsersComponent]
})
export class UsersModule { }