import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { UserData } from './type/users';

const MOCK_DATA_SERVICES = [
  { provide: UserData, useClass: UsersService}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ...MOCK_DATA_SERVICES,
  ],
})
export class MockModule { }
