import { Component, OnInit } from '@angular/core';
import '@tensorflow/tfjs';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-home',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {

  ngOnInit(): void {
  }

  data: TreeNode[] = [
    {
      label: 'Nathan Fagebaume',
      expanded: true,
      children: [
        {
          label: 'David Nizard',
          expanded: true
        },
        {
          label: 'Florian Dubois',
          expanded: true
        }
      ]
    }
  ];


}
