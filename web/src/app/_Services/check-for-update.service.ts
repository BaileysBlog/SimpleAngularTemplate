import { interval } from 'rxjs/observable/interval';
import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { environment } from '../../environments/environment';

@Injectable()
export class CheckForUpdateService
{

    constructor(private updates: SwUpdate)
    {
        if (environment.production)
        { 
            interval(this.getMS(10)).subscribe(() =>
            {
                updates.checkForUpdate();
            });
        }
    }

    public ForceUpdateCheck(): void
    { 
        if (environment.production)
        { 
            this.updates.checkForUpdate();
        }    
    }

    private getMS(seconds: number): number
    { 
        return seconds * 1000
    }
}