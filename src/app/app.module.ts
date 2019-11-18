import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Navcomponent } from 'src/Nav/nav.component';
import { Sidebarcomponent } from 'src/sidebar/sidebar.component';
import { Tablecomponent } from 'src/table/table.component';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Layoutcomponent } from 'src/layout/layout.component';
import { HttpClientModule } from "@angular/common/http";
import { Footercomponent } from 'src/footer/footer.component';
const Routes=[
  {
    path:"",
    pathMatch:"full",
    redirectTo:"table"
  },
  {
    path:"table",
    component: Tablecomponent
  },{
path:"layout",
component: Layoutcomponent
}]
@NgModule({
  declarations: [
    AppComponent,
    Navcomponent,
    Sidebarcomponent,
    Tablecomponent,
    Layoutcomponent,
    Footercomponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(Routes,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
