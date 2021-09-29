import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateusersComponent } from './createusers/createusers.component';
import { AngularComponent } from './gallery/angular/angular.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PythonComponent } from './gallery/python/python.component';
import { HomeComponent } from './home/home.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'gallery', component:GalleryComponent},
{
  path: 'gallery', children:[
    {path: '', component:GalleryComponent},
    {path: 'angular', component:AngularComponent},
    {path: 'python', component:PythonComponent}
  ]
},
{path: 'createusers', component:CreateusersComponent},
{path: 'users', component:UsersComponent},
{path: 'joinnow', component:JoinnowComponent},
{path: 'about', component:AboutComponent},
{path: 'userinfo', component:UserinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
