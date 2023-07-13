import { Component, OnInit } from '@angular/core';
// import { IOrder } from 'src/app/shared/interfaces/order.interface';
// import { orders } from 'src/app/shared/test-data/orders';
import { colorByType } from 'src/app/shared/orders-info';
import { OrderModalComponent } from '../modals/order-modal/order-modal.component';
import { ModalService } from 'src/app/services/modal.service';
import { OrderDto } from 'src/app/shared/dto/order.dto';
import { firstValueFrom } from "rxjs";
import { ConsoleApiService } from "../../services/console-api.service";
import {UserDto} from "../../shared/dto/user.dto";


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
  protected orders: OrderDto[] = [];
  protected filteredOrders: OrderDto[] = [];


  constructor(
    private _modalService: ModalService,
    private _consoleApi: ConsoleApiService,
  ) {}

  public editOrder(order: OrderDto): void {
    this._modalService.openModal(OrderModalComponent, order);
  }

  public ngOnInit(): void {
    // setTimeout(() => {
    //   this.filteredOrders = this.orders;
    //   this.isLoaded = true;
    // }, 3);
    // firstValueFrom(this._consoleApi.getAllOrders())
    //   .then(orders => {
    //     this.orders = orders;
    //     this.orders.sort((a: OrderDto, b: OrderDto) => a.id - b.id);
    //     this.orders.forEach(order => {
    //       firstValueFrom(this._consoleApi.getUserByID({ id: order.id_user })).
    //         then(user => {
    //           order.user_name = user.first_name;
    //           order.user_surname = user.surname;
    //           order.phone = user.phone;
    //       })
    //     });
    //   });

    this.orders = test_orders;
    this.orders.sort((a: OrderDto, b: OrderDto) => a.id - b.id);
    this.orders.forEach(order => {
      order.user_name = test_user.first_name;
      order.user_surname = test_user.surname;
      order.phone = test_user.phone;
    })
    this.filteredOrders = this.orders;
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
    this.filteredOrders = this.orders.filter(order =>
      (this.selectedType === 'Все статусы' || order.status === this.selectedType)
      && (this.searchText === ''
        || `${order.user_name} ${order.user_surname}`.toLowerCase().includes(this.searchText.toLowerCase())
        || String(order.id).toLowerCase().includes(this.searchText.toLowerCase()))
    );
  }
}

const test_orders: OrderDto[] = [
  new OrderDto(3,"Принят", 1,true,"Ул. Мира, 19",
    1,1,1999,"2023-07-12T04:16:01.056Z"),
  new OrderDto(2,"Завершён",1,false,"Ул. Мира, 21",
    2,2,2900,"2023-07-12T04:12:59.667Z"),
];

const test_user: UserDto = new UserDto(1, "89000000000",
  "$2b$05$NMJ83iwIf1Op6a6gFpP2gOBrhItPpU/pOKd1sDEchNmvpm/Btbw/u",
  "Рощин","Вадим", "Олегович",
  "naviprololjr@mail.ru",21000);
