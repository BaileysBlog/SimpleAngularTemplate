import { Component, OnInit } from '@angular/core';
import { UIService } from '../../../_Services/ui.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public UI: UIService) { }

  ngOnInit() {
  }

}
