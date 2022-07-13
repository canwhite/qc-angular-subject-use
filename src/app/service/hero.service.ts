import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root' //用根注入器将你的服务注册为提供者
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error:any):Observable<T>=>{
      return of(result as T)
    }
  }
  private REQUEST_URL ='/api';
  constructor(private http: HttpClient) { }
  /** 发起一个post请求 */
  getLyric(){
    return this.http.post<any>(this.REQUEST_URL,{city:"郑州"},this.httpOptions).pipe(
      //tap和catch一个用于查看结构，一个用于捕获error
      tap(res =>console.log(res)),
      catchError(this.handleError<any>('dlyric'))
    );
  }

}
