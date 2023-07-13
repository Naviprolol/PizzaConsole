import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { ingredients } from 'src/app/shared/test-data/ingredients';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  notifications: any[] = [];

  ngOnInit(): void {

  }
}
