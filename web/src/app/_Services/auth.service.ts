import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  _IsAuthenticated: boolean;

  constructor() { }

  public IsAuthenticated(): boolean
  { 
    return this._IsAuthenticated;
  }

  public Logout(): void
  { 
    if (this.IsAuthenticated())
    { 
      this._IsAuthenticated = false;
    }  
  }

  public Login(username: string, password: string): void
  { 
    this._IsAuthenticated = true;
  }


}
