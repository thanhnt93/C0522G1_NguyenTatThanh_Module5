import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {RouterModule, Routes} from '@angular/router';
import {BookEditComponent} from './book-edit/book-edit.component';

const routes: Routes = [
  {path: 'list', component: BookListComponent},
  {path: 'edit/:bookId', component: BookEditComponent}
];

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
