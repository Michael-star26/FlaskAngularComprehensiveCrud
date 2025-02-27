import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiAppearance, TuiButton, TuiIcon, TuiLabel, TuiNotification, TuiTextfield, TuiTitle } from '@taiga-ui/core';
import { TuiSegmented } from '@taiga-ui/kit';
import { TuiCardLarge, TuiForm } from '@taiga-ui/layout';
import { AddUsers } from '../interfaces/add-users';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-adduser',
  imports: [
    TuiTextfield,
    TuiLabel,
    ReactiveFormsModule,
    CommonModule,
    TuiForm,
    TuiAppearance,
    TuiCardLarge,
    TuiButton,
    TuiIcon,
    TuiTitle,
    TuiNotification
  ],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.less'
})
export class AdduserComponent implements OnInit{
  usersForm:FormGroup
  submitted=false
  message:any=''
  constructor(private UsersServiceService:UsersServiceService){
    this.usersForm=new FormGroup({
      name:new FormControl('',[
        Validators.required,
        Validators.max(15)
      ]),
      email:new FormControl('',[
        Validators.email,
        Validators.required
      ]),
      tel:new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ]),
      idNo:new FormControl('',[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(8),
      ])
    })

  }
  submitForm(){
    const addUsers:AddUsers={
      name:this.usersForm.value.name,
      email:this.usersForm.value.email,
      tel:this.usersForm.value.tel,
      idNo:this.usersForm.value.idNo
    }
    this.UsersServiceService.addUsers(addUsers)
    this.submitted=true
  }

  ngOnInit(): void {
    this.UsersServiceService.message$.subscribe(
      (msg)=>{
        this.message=msg
      }
    )
  }
}
