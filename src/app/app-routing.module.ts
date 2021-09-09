import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { ViewpageComponent } from '../app/viewpage/viewpage.component';
import { ReceiptComponent } from '../app/receipt/receipt.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'viewpage/:id',
    component: ViewpageComponent,
  },
  {
    path: 'receipt/:id',
    component: ReceiptComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
