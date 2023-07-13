import {Component, OnInit} from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { orders } from 'src/app/shared/test-data/orders';
import { colorByType } from 'src/app/shared/orders-info';
import { OrderModalComponent } from '../modals/order-modal/order-modal.component';
import { ModalService } from 'src/app/services/modal.service';
import { OrderDto } from 'src/app/shared/dto/order.dto';


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['../ingredients-page/ingredients-page.component.css', './orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  protected isDropdownOpen: boolean = false;
  protected isLoaded: boolean = false;

  protected searchText: string = '';
  protected selectedType: string = 'Все статусы';

  protected readonly types: string[] = ['Все статусы', ...Object.keys(colorByType)];
  protected readonly colorByType = colorByType;
  protected filteredOrders: IOrder[] = [];
  

  constructor(private _modalService: ModalService) {}

  public editOrder(order: IOrder): void {
    this._modalService.openModal(OrderModalComponent, order);
  }

  public ngOnInit(): void {
    this.filteredOrders = orders;
    this.isLoaded = true;
  }

  protected toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  protected toggleType(type: string): void {
    this.selectedType = type;
    this.filterOrders();
  }

  protected filterByName(): void {
    this.filterOrders();
  }

  private filterOrders(): void {
    this.filteredOrders = orders.filter(order =>
      (this.selectedType === 'Все статусы' || order.status === this.selectedType)
      && (this.searchText === '' || (order.name + order.surname).toLowerCase().includes(this.searchText.toLowerCase())
      || String(order.id).toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}
