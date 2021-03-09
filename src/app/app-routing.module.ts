import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PostModalComponent } from './post-modal/post-modal.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component'

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {path: '', redirectTo: '/', pathMatch: 'full'},
            {path: '', component: HomePageComponent},
            {path: 'post/:id', component: PostModalComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
