import { Component, OnInit } from '@angular/core';
import { workers as data } from 'src/app/shared/test-data/workers';
import { IWorker } from 'src/app/shared/interfaces/worker.interface';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.css']
})
export class StaffPageComponent implements OnInit {

  dropdownOpen: boolean = false;
  selectedRoles: string[] = ['Курьер', 'Повар', 'Менеджер'];
  roles: string[] = ['Курьер', 'Повар', 'Менеджер', 'Все'];
  workers: IWorker[] = data;
  searchText: string = '';
  filteredWorkers: IWorker[] = [];
  isClicked: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
    this.filteredWorkers = this.workers;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleRole(role: string): void {
    this.selectedRoles = [];
    this.isClicked = {}

    if (this.selectedRoles.includes(role)) {
      this.selectedRoles = this.selectedRoles.filter((d) => d !== role);
    } else {
      this.selectedRoles.push(role);
    }

    if (this.selectedRoles.includes('Все')) {
      this.selectedRoles = ['Курьер', 'Повар', 'Менеджер'];
    }

    this.isClicked[role] = !this.isClicked[role];

    this.filterWorkers();
  }

  filterByName(): void {
    this.filterWorkers();
  }

  filterWorkers(): void {
    this.filteredWorkers = this.workers.filter(worker =>
      this.selectedRoles.includes(worker.jobTitle) &&
      (worker.surname.toLowerCase().includes(this.searchText.toLowerCase())
        || worker.name.toLowerCase().includes(this.searchText.toLowerCase())
        || this.searchText === '')
    );
  }
}
