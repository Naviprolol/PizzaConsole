import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { products } from 'src/app/shared/test-data/products';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  notifications: any[] = [];

  ngOnInit(): void {
    for (let product of products) {
      if (product.volume < 2) {
        this.notifications.push({
          type: 'out-of-products',
          product: product
        });
      }
    }
  }
}
