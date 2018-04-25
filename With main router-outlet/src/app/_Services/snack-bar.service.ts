import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from "@angular/material";

@Injectable()
export class SnackBarService
{ 
    constructor(private snackBar: MatSnackBar)
    { 

    }

    openSnackBar(message: string, action: string = null, seconds: number = -1): MatSnackBarRef<SimpleSnackBar>
    {
        return this.snackBar.open(message, action, {
            duration: seconds*1000
        });   
    }
}