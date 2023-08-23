import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicsPageComponent } from './components/basics-page/basics-page.component';
import { NumbersPageComponent } from './components/numbers-page/numbers-page.component';
import { OrderComponent } from './components/order/order.component';
import { UncommonPageComponent } from './components/uncommon-page/uncommon-page.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    // Pipes
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [CommonModule, ProductsRoutingModule, PrimeNgModule],
})
export class ProductsModule {}
