import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { AdminRoutes } from './admin.routing';
import { MockModule } from '../../@mock/mock.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    HttpClientModule,
    MockModule,
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent,
  ],
})
export class AdminModule { }
