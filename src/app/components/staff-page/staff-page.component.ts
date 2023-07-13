import { Component, OnInit } from '@angular/core';
import { IWorker } from 'src/app/shared/interfaces/worker.interface';
import { ConsoleApiService } from 'src/app/services/console-api.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  dropdownOpen: boolean = false;
  selectedRole: string = 'Все сотрудники';
  roles: string[] = ['Все сотрудники', 'Курьер', 'Повар', 'Менеджер'];
  workers: IWorker[] = [];
  searchText: string = '';
  filteredWorkers: IWorker[] = [];
  isLoaded: boolean = false;

  constructor(private api: ConsoleApiService) { }

  ngOnInit(): void {
    this.api.getAllChefs().subscribe(chefs => {
      for (let chef of chefs) {
        chef.jobTitle = 'Повар'
        this.workers.push(chef)
      }
    })

    this.api.getAllCouriers().subscribe(couriers => {
      for (let courier of couriers) {
        courier.jobTitle = 'Курьер'
        this.workers.push(courier)
      }
    })

    this.api.getAllUsers().subscribe(admins => {
      for (let admin of admins) {
        admin.jobTitle = 'Менеджер'
        this.workers.push(admin)
      }
      this.isLoaded = true;
    })

    this.filteredWorkers = this.workers;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleRole(role: string): void {
    this.selectedRole = role;
    this.filterWorkers();
  }

  filterByName(): void {
    this.filterWorkers();
  }

  filterWorkers(): void {
    this.filteredWorkers = this.workers.filter(worker =>
      (this.selectedRole === 'Все сотрудники' || worker.jobTitle === this.selectedRole) &&
      (worker.first_name.toLowerCase().includes(this.searchText.toLowerCase()) // worker.surname.toLowerCase().includes(this.searchText.toLowerCase()) ||
        || this.searchText === '')
    );
  }
}
