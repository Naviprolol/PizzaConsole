import { Component, OnInit } from '@angular/core';
import { workers as data } from 'src/app/shared/test-data/workers';
import { IWorker } from 'src/app/shared/interfaces/worker.interface';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  dropdownOpen: boolean = false;
  selectedRole: string = 'Все сотрудники';
  roles: string[] = ['Все сотрудники', 'Курьер', 'Повар', 'Менеджер'];
  workers: IWorker[] = []
  searchText: string = '';
  filteredWorkers: IWorker[] = [];

  constructor(private staffService: StaffService) { }

  ngOnInit(): void {
    this.staffService.getAllChefs().subscribe(chefs => {
      for (let chef of chefs) {
        chef.jobTitle = 'Повар'
        this.workers.push(chef)
      }
    })

    this.staffService.getAllCouriers().subscribe(couriers => {
      for (let courier of couriers) {
        courier.jobTitle = 'Курьер'
        this.workers.push(courier)
      }
    })

    console.log(this.workers)

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
