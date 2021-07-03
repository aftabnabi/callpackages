import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontpageComponent } from './components/pages/frontpage/frontpage.component';


const routes: Routes = [
  {path: '', component: FrontpageComponent},
  {path: 'frontpage', component: FrontpageComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
