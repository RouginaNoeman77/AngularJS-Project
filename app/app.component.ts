import { Component } from '@angular/core';
import { DialogService } from './Services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public popupservice:DialogService){}
  
}
