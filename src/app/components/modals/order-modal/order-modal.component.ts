import { Component, Input } from "@angular/core";
import { ModalService } from "src/app/services/modal.service";
import { colorByType } from "src/app/shared/orders-info";
import { OrderDto } from "../../../shared/dto/order.dto";
import { ConsoleApiService } from "../../../services/console-api.service";
import { firstValueFrom } from "rxjs";
// import { IOrder } from "src/app/shared/interfaces/order.interface";
// import { orders } from "src/app/shared/test-data/orders";

@Component({
    selector: 'app-order-modal',
    templateUrl: 'order-modal.component.html',
    styleUrls: ['order-modal.component.css']
})
export class OrderModalComponent {
    @Input() data!: OrderDto;

    protected isDropdownOpen: boolean = false;
    protected isLoaded: boolean = false;

    protected searchText: string = '';
    protected selectedType: string = 'Не менять статус';

    protected readonly types: string[] = ['Не менять статус', ...Object.keys(colorByType)];
    protected readonly colorByType = colorByType;
    protected filteredProducts: OrderDto[] = [];

    constructor(
        private _modalService: ModalService,
        private _consoleApi: ConsoleApiService,
    ) {}

    protected toggleDropdown(): void {
        this.isDropdownOpen = !this.isDropdownOpen;
      }

    protected toggleType(type: string): void {
        this.selectedType = type;
    }

    public deleteOrder(): void {
        this.data.status = 'Отменён';
        // orders.splice(orders.findIndex(obj => obj.id === this.data.id), 1)
        this._sendUpdatedStatus();
        this._modalService.closeModal();
    }

    public changeOrder(): void {
        if (this.selectedType !== 'Не менять статус') {
            this.data.status = this.selectedType;
            this._sendUpdatedStatus();
        }
        this._modalService.closeModal();
    }

    public closeModal(): void {
        this._modalService.closeModal();
    }

    private _sendUpdatedStatus() {
        firstValueFrom(this._consoleApi.changeOrderStatusByID(
          {
            id: this.data.id,
            status: this.data.status
          }));
    }
}
