import {Component} from '@angular/core';
//import { componentFactoryName } from '@angular/compiler';

@Component ({
  selector:'text-select',
  template:`<h1>Welecome new component into Myproject</h1>
           <h3>A standard navigation bar is created with the .navbar class, followed by a responsive
            collapsing class: .navbar-expand-xl|lg|md|sm 
           (stacks the navbar vertically on extra large, large, medium or small screens).
           </h3>
  `,
  styles:['h1{color:red}']
})
export class Text_Select{};