import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService{

  constructor() { }
  intercept(){
    axios.interceptors.request.use(req => {
      console.log("ok");
    })
  }
}

export function Intercepta(llamaIntercept: InterceptorServiceService): any {
  return () => llamaIntercept.intercept();
}