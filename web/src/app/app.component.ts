import { Component } from '@angular/core';
import { UIService } from './_Services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  Folders: Array<any> = new Array<any>();

  constructor(public UI: UIService)
  {

    for (let index = 0; index < this.getRandomArbitrary(50, 100); index++) 
    {
      this.Folders.push({
        name: `Folder ${index + 1}`,
        description: "A simple folder",
        date: this.getToday()
      });
    }

  }

  getToday(): Date
  { 
    var temp = new Date();
    return new Date(temp.getFullYear(), temp.getMonth(), temp.getDate());

  }

  getRandomArbitrary(min:number, max:number): number
  {
    return Math.random() * (max - min) + min;
  }
}
