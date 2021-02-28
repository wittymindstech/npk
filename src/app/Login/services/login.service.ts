import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn:"root"
})

export class loginService{
    constructor(public http:HttpClient){}

    public getlogin(data):Observable<any>{

        return this.http.post("https://npk-server.herokuapp.com/login",data)
    }
       
};
