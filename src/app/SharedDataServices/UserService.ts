import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import 'rxjs';
import { Observable } from "rxjs";


@Injectable()
export class UserSrevice{
    
private url1:string="../src/app/UserJsonData.json";
constructor(private _http:Http){}
getUserDetails(){

    return this._http.get(this.url1)
    //.map(response=>response.json()).catch(this.errorHandler);
    
}
errorHandler(error:Response){
console.error(error)
return Observable.throw(error||"server error")

}


}