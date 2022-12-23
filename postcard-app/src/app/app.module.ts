import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PostcardComponent } from './postcard/postcard.component';
import { HttpClientModule } from '@angular/common/http'; 
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PostcardComponent
  ],
  imports: [
    BrowserModule,
    ImageCropperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
