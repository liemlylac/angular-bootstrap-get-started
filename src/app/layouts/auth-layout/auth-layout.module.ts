import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class AuthLayoutModule {
}
