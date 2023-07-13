import { Component, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { IOrder } from "src/app/shared/interfaces/order.interface";
import { colorByType } from "src/app/shared/orders-info";
import { orders } from "src/app/shared/test-data/orders";

@Component({
    selector: 'app-order-modal',
    templateUrl: 'order-modal.component.html',
    styleUrls: ['order-modal.component.css']
})
export class OrderModalComponent {
    @Input() data!: IOrder;
    
    protected isDropdownOpen: boolean = false;
    protected isLoaded: boolean = false;

    protected searchText: string = '';
    protected selectedType: string = 'Все статусы';

    protected readonly types: string[] = ['Все статусы', ...Object.keys(colorByType)];
    protected readonly colorByType = colorByType;
    protected filteredProducts: IOrder[] = [];

    constructor(private _modalService: ModalService) {
    }

    protected toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
      }
    
    protected toggleType(type: string): void {
        this.selectedType = type;
    }

    public deleteOrder(): void {
        this.data.status = 'Отменён';
        orders.splice(orders.findIndex(obj => obj.id === this.data.id), 1)
        this._modalService.closeModal();
    }

    public changeOrder(): void {
        if (this.selectedType !== 'Все статусы') {
            this.data.status = this.selectedType;
        }
        this._modalService.closeModal();
    }

    public closeModal(): void {
        this._modalService.closeModal();
    }
}