import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class ComponentsModule { }
