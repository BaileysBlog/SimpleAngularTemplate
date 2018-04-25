import { Directive, HostBinding, ElementRef } from '@angular/core';
import { UIService } from '../../_Services/ui.service';

@Directive({
  selector: '[FullHeight]',
  host: {
    "(window:resize)": 'setHeight()',
    "(window:redraw)": 'setHeight()'
  }
})
export class FullHeightDirective {

  constructor(private _elementRef: ElementRef, private UI: UIService)
  {
    this.setHeight();
  }

  @HostBinding('style.height.px')
  height: number;

  setHeight()
  {
    this.UI.CalculateFullHeight();
    this.height = this.UI.FullHeight;
  }

}
