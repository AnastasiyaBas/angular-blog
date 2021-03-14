import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PostModalComponent } from './shared/dialog/post-modal/post-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MyAlbumsComponent } from './pages/profile-page/my-albums/my-albums.component';
import { ToDoListComponent } from './pages/profile-page/to-do-list/to-do-list.component';
import { MyPostsComponent } from './pages/profile-page/my-posts/my-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostModalComponent,
    PostPageComponent,
    ProfilePageComponent,
    MyAlbumsComponent,
    ToDoListComponent,
    MyPostsComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  entryComponents: [ PostModalComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
