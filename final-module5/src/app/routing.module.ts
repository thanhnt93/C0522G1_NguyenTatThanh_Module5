import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {RouterModule, Routes} from '@angular/router';
import {BookModule} from './book/book.module';

const routes: Routes = [
  {
    path: 'category', loadChildren: () => CategoryModule
  },
  {
    path: 'product', loadChildren: () => ProductModule
  }, {
    path: 'book', loadChildren: () => BookModule
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
