import { Component, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";

@Component({
    selector: 'app-order-modal',
    templateUrl: 'order-modal.component.html'
})
export class OrderModalComponent {
    @Input() data!: any;
}