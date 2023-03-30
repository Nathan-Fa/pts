import {AfterViewInit, Component, ViewChild} from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.component.html',
  styleUrls: ['./object-detection.component.css']
})
export class ObjectDetectionComponent implements AfterViewInit{

  @ViewChild("video")
  public video: any;
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
    this.dataLoading = false;
  }

  // turn on device camera
  async startCamera() {
    await this.setupDevices();
  }

  // load the tenseflow object detection model and send video stram to model an get response
  async loadImageDetection() {
    this.dataLoading = true;
    cocoSsd.load().then(model => {
      model.detect(this.video.nativeElement).then(predictions => {
        console.log(predictions);
        this.predictionValue = predictions;
        this.predictionValue.forEach(element  => {element.score = Math.round(element.score * 100)});
        this.totalObjectsDetected = predictions.length
        this.dataLoading = false;
      });
    });
  }
}
