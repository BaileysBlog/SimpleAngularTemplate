import { Component, OnInit, OnDestroy } from '@angular/core';
import { UIService } from '../../../_Services/ui.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackBarService } from '../../../_Services/snack-bar.service';
import { AuthService } from '../../../_Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public LoginForm: FormGroup;
  public Loading: boolean;

  constructor(private UI:UIService, private toast: SnackBarService, private auth: AuthService) 
  {

  }

  private ResetForm(): void
  {
    this.LoginForm.enable();
    this.LoginForm.reset();
  }

  private initForm(): void
  {
    this.LoginForm = new FormGroup({
      Email: new FormControl(null, Validators.compose([Validators.required, Validators.email])),
      Password: new FormControl(null, Validators.required)
    });
  }

  public Login(data?:any): void
  { 
    var value = this.LoginForm.value;
    this.Loading = true;
    this.LoginForm.disable();

    setTimeout(() =>
    {
      this.Loading = false;
      this.ResetForm();
      
      this.toast.openSnackBar("Login Successful", null, 5);
      this.auth.Login(null, null);
    }, 5000);

  }


  ngOnInit() 
  {
    this.UI.SetIncludeSideNav(false);
    this.initForm();
  }
  ngOnDestroy()
  { 
    this.UI.SetIncludeSideNav(true);
  }


}
