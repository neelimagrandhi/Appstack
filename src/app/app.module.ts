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
import { Profilecomponent } from 'src/profile/profile.component';
import { Settingscomponent } from 'src/settings/settings.component';
import { Signincomponent } from 'src/signin/signin.component';
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
    },
  {
    path:"profile",
    component: Profilecomponent
  },
{
  path:"settings",
  component: Settingscomponent
},
{
  path:"signin",
  component: Signincomponent
}]
@NgModule({
  declarations: [
    AppComponent,
    Navcomponent,
    Sidebarcomponent,
    Tablecomponent,
    Layoutcomponent,
    Footercomponent,
    Profilecomponent,
    Settingscomponent,
    Signincomponent
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
