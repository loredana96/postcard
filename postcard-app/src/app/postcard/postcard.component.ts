import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss']
})
export class PostcardComponent {
  showPreview = false;
  imgChangeEvt: any = '';
  cropImgPreview: any = '';
  onFileChange(event: any): void {
    this.showPreview = true;
    this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
    this.cropImgPreview = e.base64;
  }
  imgLoad() {
      // display cropper tool
  }
  initCropper() {
      // init cropper
  }
  
  imgFailed() {
      // error msg
  }

  hideImage() {
    this.showPreview = false;
  }
}
