import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '@app/pages/login/login.component';
import { AuthLayoutRoutes } from './auth-layout.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthLayoutModule {
}
