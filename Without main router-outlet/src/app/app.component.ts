import { Component } from '@angular/core';
import { UIService } from './_Services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  
  constructor(public UI: UIService)
  { 

  }
}
