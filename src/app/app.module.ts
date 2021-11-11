import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { AboutComponent } from './about/about.component';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { AngularComponent } from './gallery/angular/angular.component';
import { PythonComponent } from './gallery/python/python.component';
import { UsersComponent } from './users/users.component';
import { SingleuserService } from './userinfo/singleuser.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    JoinnowComponent,
    AboutComponent,
    UserinfoComponent,
    CreateusersComponent,
    AngularComponent,
    PythonComponent,
    UsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers:[
    SingleuserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
