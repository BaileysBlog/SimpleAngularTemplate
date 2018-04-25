import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatSnackBarModule, MatMenuModule, MatSidenavModule, MatListModule, MatFormFieldModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [NgbModule, ReactiveFormsModule,MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatSnackBarModule, MatMenuModule, MatSidenavModule, MatListModule, MatFormFieldModule],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatIconModule, MatSnackBarModule, MatMenuModule, MatSidenavModule, MatListModule, MatFormFieldModule],
})
export class MaterialModule { }
