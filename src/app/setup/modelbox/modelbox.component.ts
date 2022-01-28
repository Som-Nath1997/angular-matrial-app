import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modelbox',
  templateUrl: './modelbox.component.html',
  styleUrls: ['./modelbox.component.css']
})
export class ModelboxComponent  {
  public myForm!: FormGroup;
 
  titleAlert: string = 'This field is required';

  message: boolean = false;
  public showPassword: boolean = false;

  userAddressValidations!: FormGroup;

  hide = true;
  constructor( public dialogRef: MatDialogRef<ModelboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder ) { }
  
  ngOnInit() {
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
      this.message = true;
      // when submit the form do something
    }

    
}


