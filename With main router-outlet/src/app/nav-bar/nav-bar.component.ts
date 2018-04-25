import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PromptUpdateService } from '../_Services/prompt-update.service';
import { UIService } from '../_Services/ui.service';
import { MatToolbar } from '@angular/material';
import { AuthService } from '../_Services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

  @HostListener('window:resize', ['$event'])
  onResize(event?)
  {
    this.UI.SetBodyHeight(window.innerHeight);
    if (this.NavBar != null)
    { 
      var height = (this.NavBar._elementRef.nativeElement as HTMLElement).offsetHeight;
      this.UI.SetNavBarHeight(height);

      this.UI.CalculateFullHeight();
    }  
  }

  @ViewChild('nav') NavBar: MatToolbar;
    
  constructor(public Update: PromptUpdateService, public UI:UIService, public auth: AuthService)
  {

  }

  ngOnInit() 
  {

  }

  ngAfterViewInit()
  { 
    this.onResize();
  }

}
