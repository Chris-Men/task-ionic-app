import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
darkMode: any;
title: any;
backButton: any;
color: any;
centerTitlr: any;
isModal: any;
centerTitle: any;
setTheme(arg0: boolean) {
throw new Error('Method not implemented.');
}

  @Input() control: FormControl;
  @Input() label: string ;
  @Input() icon: string ;
  @Input() type: string;
  @Input() autocomplete: string;

  isPassword: boolean;
  hide: boolean = true;

  constructor() { }

  ngOnInit() {

    if(this.type == 'password') this.isPassword = true;
  }

showOrHidePassword(){
  this.hide  = !this.hide;

  if(this.hide){
    this.type ='password'
  }else{
    this.type='text';
  }
}

}
