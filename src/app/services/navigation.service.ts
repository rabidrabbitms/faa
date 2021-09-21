import { Injectable } from '@angular/core';
import ProductService from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Global } from './Global';

@Injectable({ providedIn: 'root' })
export default class NavigationService {
    constructor(
        readonly route: ActivatedRoute,
        readonly router: Router,
        readonly productService: ProductService,
        readonly global: Global
    ) { }

    navbarClose = new Subject<void>();

    inFirstAvenu() {
        const splitUri = this.router.url.split('/');
        return splitUri[1] === "firstavenu";
    }

    async getProductRoutes() {
        if (this.global.User) {
            try {
                const categories = await this.productService.getProducts();

                const navRoutes: NavRoute[] = [];
                for (const category of categories)
                    navRoutes.push({ name: category.Name ?? "", route: ["firstavenu", "category", category.ID] });
                return navRoutes;
            } catch {
                return [];
            }
        } else
            return [];
    }

    closeNavbar() {
        this.navbarClose.next();
    }
}

export interface NavRoute {
    name: string;
    route: (string | number | undefined)[];
}