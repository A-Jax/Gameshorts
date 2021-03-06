import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment'

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ImageDetailComponent } from './component/image-detail/image-detail.component';
import { LoginComponent } from './component/login/login.component';
import { UploadComponent } from './component/upload/upload.component';
import { AuthenticationGaurdService } from './services/authentication-gaurd.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { appRoutes } from '../routes';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './component/404/404.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    ImageDetailComponent,
    LoginComponent,
    UploadComponent,
    AboutComponent,
    RegisterComponent,
    ProfileComponent,
    ReversePipe,
    FooterComponent,
    ErrorPageComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticationGaurdService,
    AuthenticationService,
    ImageService,
    UploadService,
    ReversePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
