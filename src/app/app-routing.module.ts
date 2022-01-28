import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MessageboxModule} from '../app/messagebox/messagebox.module'
import {MessageComponent} from '../app/messagebox/message/message.component'
import { HeaderComponent } from './shared/components/header/header.component';
import { SetupComponent } from './setup/setup/setup.component';
import {FormComponent} from '../app/setup/form/form.component'
import{RoleComponent} from '../app/setup/role/role.component'
import { RoleandpermissionComponent } from './setup/roleandpermission/roleandpermission.component';

const routes: Routes = [
  { path: '', redirectTo: '/message', pathMatch: 'full'},
  // { path: 'header', component: HeaderComponent },
  { path: 'message', component: MessageComponent },
  { path: 'setup', component: SetupComponent},
  { path: 'setup/form', component: FormComponent},
  { path: 'setup/form/role', component:RoleComponent},
  { path: 'setup/form/rols&permissions', component:RoleandpermissionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
