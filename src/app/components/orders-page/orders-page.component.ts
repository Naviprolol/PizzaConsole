import {Component, OnInit} from '@angular/core';
import { IOrder } from 'src/app/shared/interfaces/order.interface';
import { orders } from 'src/app/shared/test-data/orders';
import { colorByType } from 'src/app/shared/orders-info';
import { OrderModalComponent } from '../modals/order-modal/order-modal.component';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['../products-page/products-page.component.css', './orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {
  protected isDropdownOpen: boolean = false;
  protected isLoaded: boolean = false;

  protected searchText: string = '';
  protected selectedType: string = 'Все статусы';

  protected readonly types: string[] = ['Все статусы', ...Object.keys(colorByType)];
  protected readonly colorByType = colorByType;
  protected filteredProducts: IOrder[] = [];

  constructor(private _modalService: ModalService) {}

  public editOrder(order: any): void {
    this._modalService.openModal(OrderModalComponent, order.name);
  }

  public ngOnInit(): void {
    this.filteredProducts = orders;
    this.isLoaded = true;
  }

  protected toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  protected toggleType(type: string): void {
    this.selectedType = type;
    this.filterProducts();
  }

  protected filterByName(): void {
    this.filterProducts();
  }

  private filterProducts(): void {
    this.filteredProducts = orders.filter(order =>
      (this.selectedType === 'Все статусы' || order.status === this.selectedType)
      && (this.searchText === '' || (order.name + order.surname).toLowerCase().includes(this.searchText.toLowerCase()) 
      || String(order.id).toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}
