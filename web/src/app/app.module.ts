import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material Design/material.module';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { LogUpdateService } from './_Services/log-update.service';
import { CheckForUpdateService } from './_Services/check-for-update.service';
import { PromptUpdateService } from './_Services/prompt-update.service';
import { SnackBarService } from './_Services/snack-bar.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ComponentsModule } from './UI/components/components.module';
import { UIService } from './_Services/ui.service';
import { AuthService } from './_Services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [CheckForUpdateService,LogUpdateService, PromptUpdateService, SnackBarService, UIService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule
{
  constructor(checker: CheckForUpdateService, logger: LogUpdateService, prompter: PromptUpdateService)
  { 
    
  }
}
