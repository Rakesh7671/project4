import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 isheadingtag:boolean=true;
mycolor="blue"
mystyle:object={
  colour:'white',
  background:'green',
  border:'spx solid red',
}
name=''
 username(e:any){
  this.name=e.target.value
 }

myname='karthik'


MyCount=0;
myIncrement(){
  this.MyCount+=1
}
myDecrement(){
  this.MyCount-=1
}
}

