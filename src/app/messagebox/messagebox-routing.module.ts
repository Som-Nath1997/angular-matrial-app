import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MessageboxModule} from '../messagebox/messagebox.module'
import{ MessageComponent} from '../messagebox/message/message.component'

const routes: Routes = [
{ path: '/message', component: MessageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageboxRoutingModule { }