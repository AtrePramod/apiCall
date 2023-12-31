import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApicallComponent } from './apicall/apicall.component';
import { ViewdataComponent } from './viewdata/viewdata.component';

const routes: Routes = [
  {
    path: "apicall",
    component:ApicallComponent
  },{
    path: "viewdata",
    component:ViewdataComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
