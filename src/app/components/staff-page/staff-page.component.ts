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
  selectedRole: string = 'Все сотрудники';
  roles: string[] = ['Курьер', 'Повар', 'Менеджер', 'Все сотрудники'];
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
    this.selectedRole = role;
    // this.isClicked = {}

    // this.isClicked[role] = !this.isClicked[role];

    this.filterWorkers();
  }

  filterByName(): void {
    this.filterWorkers();
  }

  filterWorkers(): void {
    this.filteredWorkers = this.workers.filter(worker =>
      (this.selectedRole === 'Все сотрудники' || worker.jobTitle === this.selectedRole) &&
      (worker.surname.toLowerCase().includes(this.searchText.toLowerCase())
        || worker.name.toLowerCase().includes(this.searchText.toLowerCase())
        || this.searchText === '')
    );
  }
}
