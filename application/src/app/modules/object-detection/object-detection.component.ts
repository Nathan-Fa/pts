import {Component, ViewChild} from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.component.html',
  styleUrls: ['./object-detection.component.css']
})
export class ObjectDetectionComponent {

  @ViewChild("video")
  public video: any;
  //public video: ElementRef;
  error: any;
  predictionValue = [{
    class: '- - -',
    score: 0
  }];
  totalObjectsDetected = 0;
  dataLoading = false;

  async ngAfterViewInit() {
    await this.setupDevices();
  }

  // setup the media device or device camera
  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  // turn off device camera
  stopCamera() {
    this.video.nativeElement.srcObject.getTracks().forEach((track: { stop: () => any; }) => track.stop());
  }

  // turn on device camera
  async starCamera() {
    await this.setupDevices();
  }

  // load the tenseflow object detection model and send video stram to model an get response
  async loadImageDetection() {
    this.dataLoading = true;
    cocoSsd.load().then(model => {
      model.detect(this.video.nativeElement).then(predictions => {
        this.predictionValue = predictions;
        this.totalObjectsDetected = predictions.length
        this.dataLoading = false;
      });
    });
  }
}
