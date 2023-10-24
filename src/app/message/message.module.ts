import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MessageComponent } from "./message.component";
import { MessageRoutingModule } from "./message.routing.module";

@NgModule({
    imports: [CommonModule, FormsModule, MessageRoutingModule],
    declarations: [MessageComponent],
    exports: [MessageComponent]
})
export class MessageModule { }