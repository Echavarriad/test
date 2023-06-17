import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DasboardComponent} from './components/dasboard/dasboard.component';

const routes: Routes = [
  {path:'', redirectTo:'dasboard', pathMatch:'full'  },
  {path:'dasboard', component:DasboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
