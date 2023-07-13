import { Component, OnInit } from '@angular/core';
// import { IOrder } from 'src/app/shared/interfaces/order.interface';
// import { orders } from 'src/app/shared/test-data/orders';
import { colorByType } from 'src/app/shared/orders-info';
import { OrderModalComponent } from '../modals/order-modal/order-modal.component';
import { ModalService } from 'src/app/services/modal.service';
import { OrderDto } from 'src/app/shared/dto/order.dto';
import { firstValueFrom} from "rxjs";
import { ConsoleApiService } from "../../services/console-api.service";
import { UserDto } from "../../shared/dto/user.dto";
import {User2Dto} from "../../shared/dto/user2Dto";


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
    const currentUsersId: Set<number> = new Set<number>();
    const getUserPromises: Promise<User2Dto>[] = [];

    setTimeout(() => {
      this.filteredOrders = this.orders;
      this.isLoaded = true;
    }, 2000);

    // Да простит меня господь за эту херню

    firstValueFrom(this._consoleApi.getAllOrders())
      .then(orders => {
        this.orders = orders;
        this.orders.sort((a: OrderDto, b: OrderDto) => a.id - b.id);
        this.orders.forEach(order => {
          if (!currentUsersId.has(order.id_user)) {
            currentUsersId.add(order.id_user);
            getUserPromises.push(firstValueFrom(this._consoleApi.getUserByID({ id: order.id_user })));
          }});
        Promise.all(getUserPromises).then(users => {
          users.forEach(user => {
            for (let i = 0; i < this.orders.length; i++) {
              if (user.user.id === this.orders[i].id_user) {
                this.orders[i].user_name = user.user.first_name;
                this.orders[i].user_surname = user.user.surname;
                this.orders[i].phone = user.user.phone;
              }
            }
          })
        });
        firstValueFrom(this._consoleApi.getAllChefs())
          .then(chefs => {
            chefs.forEach(chef => {
              for (let i = 0; i < this.orders.length; i++) {
                if (chef.id === this.orders[i].id_chef) {
                  this.orders[i].chef_fullname = `${chef.first_name} ${chef.surname}`;
                  break;
                }
              }
            })
          });
        firstValueFrom(this._consoleApi.getAllCouriers())
          .then(couriers => {
            couriers.forEach(courier => {
              for (let i = 0; i < this.orders.length; i++) {
                if (courier.id === this.orders[i].id_chef) {
                  this.orders[i].courier_fullname = `${courier.first_name} ${courier.surname}`;
                  break;
                }
              }
            })
          });
      });
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
