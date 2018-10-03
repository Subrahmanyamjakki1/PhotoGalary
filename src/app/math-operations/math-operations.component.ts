import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math-operations',
  templateUrl: './math-operations.component.html',
  styleUrls: ['./math-operations.component.css']
})
export class MathOperationsComponent implements OnInit {
  //   Math(a,b,opp) {
  //   switch(+){
  //     var x=parseInt(this.a),y=parseInt(this.b),z
  //     z=x+y
  //     return z
  //   }
  //   switch(a,b){
  //     var x=parseInt(this.a),y=parseInt(this.b),z
  //     z=x*y
  //     return z
  //   }
  // }
  math(a,b){
    var x=parseInt(a),y=parseInt(b),z
       z=x+y
      return document.getElementById('M').innerHTML=z;
  }

  constructor() { }

  ngOnInit() {
  }

}
