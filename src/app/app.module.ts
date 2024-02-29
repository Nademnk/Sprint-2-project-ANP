import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MedicineAdminComponent } from './medicine-admin/medicine-admin.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SuccsessComponent } from './succsess/succsess.component';


@NgModule({
  declarations: [
    AppComponent,
    MedicineAdminComponent,
    HomeComponent,
    UserComponent,
    SuccsessComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'MedicineAdmin', component:MedicineAdminComponent},
      {path:'Home', component:HomeComponent},
      {path:'User', component:UserComponent},
      {path:'Succsess', component:SuccsessComponent},
      {path:'',redirectTo:'/Home',pathMatch:'full'},
    ])
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
