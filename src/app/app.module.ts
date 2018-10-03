import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { } from '@angular/core';

import { AppComponent } from './app.component';
import { Text_Select } from './text.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MathOperationsComponent } from './math-operations/math-operations.component';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';
import { MyCostumBgColor} from './My-costum-bgcolor';
import { MyCustomPipe } from './MyCustomPipe';
import { TextRevPipe } from './TextRevPipe';
import { TextUnderLine } from './text_underline';
import { MyStrTest } from './custom-component';
import { myStringReverse } from './reversestring';
import { MouseEvents } from './MouseEvents';
import { TextBoldPipe } from './BoldtextPipe';
import { StructralDirectiveComponent } from './structral-directive/structral-directive.component';
import { IncrementAndDecrement } from './MyParent';
//import { ChildFunction } from "./ChildFunction";
import { MyChildFunction } from './MyChild';
import { KeyUpComponent } from './eventbainding';
import { InjectServicesComponent } from './inject-services/inject-services.component';
import { EmployeeDetailsSrevices } from './SharedDataServices/EmployeeSrevices';
import { JsonSrevice } from './SharedDataServices/JsonSrevice';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserInjectComponent } from './user-inject/user-inject.component';
import { UserSrevice } from './SharedDataServices/UserService';
//import { PickColor } from './pickColor';
import { FromsComponent } from './froms/froms.component';
import {FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { MDFormComponent } from './mdform/mdform.component'
import { BuiltInPipes } from './built-in.pipes';
import { RepeatPipe } from './repeatPipe';
import { PositionComponent } from './position/position.component';
@NgModule({
  declarations: [
    AppComponent ,Text_Select, EmployeeSalaryComponent, EmployeeDetailsComponent,
      MathOperationsComponent, MyCustomComponentComponent , MyCostumBgColor,MyCustomPipe,
     TextRevPipe,TextUnderLine,MyStrTest,myStringReverse, MouseEvents,TextBoldPipe,
      StructralDirectiveComponent,IncrementAndDecrement,MyChildFunction,KeyUpComponent, 
      InjectServicesComponent, UserInjectComponent, FromsComponent, MDFormComponent,
      BuiltInPipes,RepeatPipe, PositionComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [EmployeeDetailsSrevices,JsonSrevice,HttpClient,UserSrevice],
  bootstrap: [AppComponent]
})
export class AppModule { }