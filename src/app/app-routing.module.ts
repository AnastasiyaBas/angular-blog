import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyAlbumsComponent } from './pages/profile-page/my-albums/my-albums.component';
import { MyPostsComponent } from './pages/profile-page/my-posts/my-posts.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ToDoListComponent } from './pages/profile-page/to-do-list/to-do-list.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {path: '', component: HomePageComponent}
        ]
    },
    {path: 'profile/:id', component: ProfilePageComponent, children: [
        {path: 'my-albums/:id', component: MyAlbumsComponent},
        {path: 'todo-list/:id', component: ToDoListComponent},
        {path: 'my-posts/:id', component: MyPostsComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
