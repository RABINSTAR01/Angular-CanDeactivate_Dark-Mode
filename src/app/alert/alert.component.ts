import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  islog: boolean=true;
  isdark:boolean=false;
a(__values: any)
{
  console.log(__values)
  this.isdark=!this.isdark;
}

}
