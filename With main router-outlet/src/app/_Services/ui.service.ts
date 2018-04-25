import { Injectable, ElementRef, ViewChild, HostListener } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { Router, NavigationEnd } from "@angular/router";




@Injectable()
export class UIService
{
    public ShowSideNav: boolean;
    NavBarHeight: number;
    BodyHeight: number;
    public FullHeight: number = 0;

    IncludeSideNav: boolean = true;

    constructor(private Nav:Router)
    {
        Nav.events.subscribe(event =>
        {
            if (event instanceof NavigationEnd)
            { 
                this.ShowSideNav = false;
                window.dispatchEvent(new Event("resize"));
            }    
        });
    }

    public GetIncludeSideNav(): boolean
    { 
        return this.IncludeSideNav;
    }

    public SetIncludeSideNav(state: boolean): void
    { 
        this.IncludeSideNav = state;
    }

    public SetNavBarHeight(value: number): void
    { 
        this.NavBarHeight = value;
    }

    public GetNavBarHeight(): number
    { 
        return this.NavBarHeight;
    }

    public CalculateFullHeight(): void
    { 
        //console.log(`Body Height: ${this.BodyHeight} Nav Height: ${this.GetNavBarHeight()}`);
        this.FullHeight = this.BodyHeight - this.GetNavBarHeight();
        
    }

    public SetBodyHeight(value: number): void
    {
        this.BodyHeight = value;
    }

    

    ToggleSideNav(): void
    { 
        this.ShowSideNav = !this.ShowSideNav;
    }
}