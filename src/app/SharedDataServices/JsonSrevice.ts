import { Injectable } from "@angular/core";
import{HttpClient} from "@angular/common/http";
// import { Observable } from "rxjs/observable";
import "rxjs";
import { Observable } from "rxjs";
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
// import { Iproduct } from '../inject-services/inject-service-product';


@Injectable()
export class JsonSrevice{

  private url:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient){ }


  getUserDetails(){
    return this.http.get(this.url);
  }

  // getEployees():Observable<Iproduct[]>{
  //    return this.http.get(this.url)
  //       .map((response:Response)=><Iproduct[]>response.json())
  //       .do(data=>console.log(JSON.stringify(data)))
  //       .catch(this.handleError)
  //      }
  //      private handleError(error:Response){
  //         console.log(error);
  //         return Observable.throw(error.json().error());
          
  //      }
       
}