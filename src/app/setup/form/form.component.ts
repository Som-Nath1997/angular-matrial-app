import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public myForm!: FormGroup;
  showPassword!: boolean;

  constructor() { }

  ngOnInit(){
    this.myForm = new FormGroup({
      myName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      checkbox:  new FormControl('', [ Validators.required]),

      email: new FormControl('', [Validators.required, Validators.email , Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      cmail: new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      cpassword: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      });
  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  public myError = (controlName: string, errorName: string) =>{
    return this.myForm.controls[controlName].hasError(errorName);
    }

    onSubmit() {
      console.log(this.myForm.value);
      this.myForm.disable();
      // when submit the form do something
    }


}
