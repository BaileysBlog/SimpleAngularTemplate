import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { UpdateAvailableEvent } from "@angular/service-worker/src/low_level";
import { SnackBarService } from "./snack-bar.service";

@Injectable()
export class PromptUpdateService
{

    public UpdatesAvailable: boolean = false;

    constructor(private updates: SwUpdate, private snackBar: SnackBarService)
    {
        updates.available.subscribe(event =>
        {
            this.UpdatesAvailable = true;
            this.DisplayUpdateNotification();
        });
    }

    private DisplayUpdateNotification(): void
    { 
        //Make a UI alert show up in the bottom corner of the screen!
        //Non-blocking pop-up!
        let result = this.snackBar.openSnackBar("Install Latest Updates?", "Update");
        result.onAction().subscribe(() => this.ForceUpdate());
    }

    public ForceUpdate(): void
    { 
        if (this.UpdatesAvailable)
        { 
            this.updates.activateUpdate().then(() => document.location.reload());
        }    
    }

    private promptUser(): boolean
    { 
        return confirm("Do you want to perform an update?");
    }
}