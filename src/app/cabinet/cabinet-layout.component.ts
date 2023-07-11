import { Component } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, Subject, filter, takeUntil } from "rxjs";

@Component({
    templateUrl: 'cabinet-layout.component.html',
    styleUrls: ['cabinet-layout.component.css']
})
export class CabinetLayoutComponent {
    public title$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private _subscription$: Subject<void> = new Subject<void>();
    constructor(private _router: Router) {
        this._router.events
            .pipe(
                takeUntil(this._subscription$),
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(
                {
                    next: (value: any) => {
                        switch (value.url) {
                            case '/cabinet/orders':
                                this.title$.next('Заказы');
                                break;
                            case '/cabinet/staff':
                                this.title$.next('Сотрудники');
                                break;
                            case '/cabinet/products':
                                this.title$.next('Продукты');
                                break;
                            default:
                                this.title$.next('Страница не найдена');
                                break;
                        }
                    }
                });
    }
    public ngOnDestroy(): void {
        this._subscription$.unsubscribe();
    }
}